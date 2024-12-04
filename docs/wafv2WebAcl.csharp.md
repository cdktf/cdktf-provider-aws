# `wafv2WebAcl` Submodule <a name="`wafv2WebAcl` Submodule" id="@cdktf/provider-aws.wafv2WebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2WebAcl <a name="Wafv2WebAcl" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAcl(Construct Scope, string Id, Wafv2WebAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig">Wafv2WebAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig">Wafv2WebAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig">PutAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig">PutCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig">PutChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody">PutCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction">PutDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig">ResetAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig">ResetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig">ResetChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody">ResetCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRuleJson">ResetRuleJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains">ResetTokenDomains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociationConfig` <a name="PutAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig"></a>

```csharp
private void PutAssociationConfig(Wafv2WebAclAssociationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---

##### `PutCaptchaConfig` <a name="PutCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig"></a>

```csharp
private void PutCaptchaConfig(Wafv2WebAclCaptchaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---

##### `PutChallengeConfig` <a name="PutChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig"></a>

```csharp
private void PutChallengeConfig(Wafv2WebAclChallengeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---

##### `PutCustomResponseBody` <a name="PutCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody"></a>

```csharp
private void PutCustomResponseBody(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultAction` <a name="PutDefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction"></a>

```csharp
private void PutDefaultAction(Wafv2WebAclDefaultAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig"></a>

```csharp
private void PutVisibilityConfig(Wafv2WebAclVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---

##### `ResetAssociationConfig` <a name="ResetAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig"></a>

```csharp
private void ResetAssociationConfig()
```

##### `ResetCaptchaConfig` <a name="ResetCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig"></a>

```csharp
private void ResetCaptchaConfig()
```

##### `ResetChallengeConfig` <a name="ResetChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig"></a>

```csharp
private void ResetChallengeConfig()
```

##### `ResetCustomResponseBody` <a name="ResetCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody"></a>

```csharp
private void ResetCustomResponseBody()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetRuleJson` <a name="ResetRuleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRuleJson"></a>

```csharp
private void ResetRuleJson()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTokenDomains` <a name="ResetTokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains"></a>

```csharp
private void ResetTokenDomains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2WebAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2WebAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2WebAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2WebAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Wafv2WebAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Wafv2WebAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2WebAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl">ApplicationIntegrationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig">AssociationConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig">ChallengeConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody">CustomResponseBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken">LockToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput">AssociationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput">CaptchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput">ChallengeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput">CustomResponseBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput">DefaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJsonInput">RuleJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput">TokenDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJson">RuleJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains">TokenDomains</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationIntegrationUrl`<sup>Required</sup> <a name="ApplicationIntegrationUrl" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl"></a>

```csharp
public string ApplicationIntegrationUrl { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationConfig`<sup>Required</sup> <a name="AssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig"></a>

```csharp
public Wafv2WebAclAssociationConfigOutputReference AssociationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `CaptchaConfig`<sup>Required</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig"></a>

```csharp
public Wafv2WebAclCaptchaConfigOutputReference CaptchaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a>

---

##### `ChallengeConfig`<sup>Required</sup> <a name="ChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig"></a>

```csharp
public Wafv2WebAclChallengeConfigOutputReference ChallengeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a>

---

##### `CustomResponseBody`<sup>Required</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody"></a>

```csharp
public Wafv2WebAclCustomResponseBodyList CustomResponseBody { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a>

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction"></a>

```csharp
public Wafv2WebAclDefaultActionOutputReference DefaultAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a>

---

##### `LockToken`<sup>Required</sup> <a name="LockToken" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken"></a>

```csharp
public string LockToken { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule"></a>

```csharp
public Wafv2WebAclRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a>

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig"></a>

```csharp
public Wafv2WebAclVisibilityConfigOutputReference VisibilityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a>

---

##### `AssociationConfigInput`<sup>Optional</sup> <a name="AssociationConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput"></a>

```csharp
public Wafv2WebAclAssociationConfig AssociationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---

##### `CaptchaConfigInput`<sup>Optional</sup> <a name="CaptchaConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput"></a>

```csharp
public Wafv2WebAclCaptchaConfig CaptchaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---

##### `ChallengeConfigInput`<sup>Optional</sup> <a name="ChallengeConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput"></a>

```csharp
public Wafv2WebAclChallengeConfig ChallengeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---

##### `CustomResponseBodyInput`<sup>Optional</sup> <a name="CustomResponseBodyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput"></a>

```csharp
public object CustomResponseBodyInput { get; }
```

- *Type:* object

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput"></a>

```csharp
public Wafv2WebAclDefaultAction DefaultActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `RuleJsonInput`<sup>Optional</sup> <a name="RuleJsonInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJsonInput"></a>

```csharp
public string RuleJsonInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TokenDomainsInput`<sup>Optional</sup> <a name="TokenDomainsInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput"></a>

```csharp
public string[] TokenDomainsInput { get; }
```

- *Type:* string[]

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput"></a>

```csharp
public Wafv2WebAclVisibilityConfig VisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuleJson`<sup>Required</sup> <a name="RuleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJson"></a>

```csharp
public string RuleJson { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TokenDomains`<sup>Required</sup> <a name="TokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains"></a>

```csharp
public string[] TokenDomains { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2WebAclAssociationConfig <a name="Wafv2WebAclAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfig {
    object RequestBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody">RequestBody</a></code> | <code>object</code> | request_body block. |

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody"></a>

```csharp
public object RequestBody { get; set; }
```

- *Type:* object

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#request_body Wafv2WebAcl#request_body}

---

### Wafv2WebAclAssociationConfigRequestBody <a name="Wafv2WebAclAssociationConfigRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBody {
    Wafv2WebAclAssociationConfigRequestBodyApiGateway ApiGateway = null,
    Wafv2WebAclAssociationConfigRequestBodyAppRunnerService AppRunnerService = null,
    Wafv2WebAclAssociationConfigRequestBodyCloudfront Cloudfront = null,
    Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool CognitoUserPool = null,
    Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance VerifiedAccessInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.appRunnerService">AppRunnerService</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | app_runner_service block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront">Cloudfront</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | cloudfront block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cognitoUserPool">CognitoUserPool</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | cognito_user_pool block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.verifiedAccessInstance">VerifiedAccessInstance</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | verified_access_instance block. |

---

##### `ApiGateway`<sup>Optional</sup> <a name="ApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.apiGateway"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyApiGateway ApiGateway { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#api_gateway Wafv2WebAcl#api_gateway}

---

##### `AppRunnerService`<sup>Optional</sup> <a name="AppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.appRunnerService"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyAppRunnerService AppRunnerService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

app_runner_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#app_runner_service Wafv2WebAcl#app_runner_service}

---

##### `Cloudfront`<sup>Optional</sup> <a name="Cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCloudfront Cloudfront { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

cloudfront block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cloudfront Wafv2WebAcl#cloudfront}

---

##### `CognitoUserPool`<sup>Optional</sup> <a name="CognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cognitoUserPool"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool CognitoUserPool { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

cognito_user_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cognito_user_pool Wafv2WebAcl#cognito_user_pool}

---

##### `VerifiedAccessInstance`<sup>Optional</sup> <a name="VerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.verifiedAccessInstance"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance VerifiedAccessInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

verified_access_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#verified_access_instance Wafv2WebAcl#verified_access_instance}

---

### Wafv2WebAclAssociationConfigRequestBodyApiGateway <a name="Wafv2WebAclAssociationConfigRequestBodyApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyApiGateway {
    string DefaultSizeInspectionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyAppRunnerService <a name="Wafv2WebAclAssociationConfigRequestBodyAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyAppRunnerService {
    string DefaultSizeInspectionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyCloudfront <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyCloudfront {
    string DefaultSizeInspectionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool <a name="Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool {
    string DefaultSizeInspectionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance <a name="Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance {
    string DefaultSizeInspectionLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclCaptchaConfig <a name="Wafv2WebAclCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCaptchaConfig {
    Wafv2WebAclCaptchaConfigImmunityTimeProperty ImmunityTimeProperty = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `ImmunityTimeProperty`<sup>Optional</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclCaptchaConfigImmunityTimeProperty ImmunityTimeProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCaptchaConfigImmunityTimeProperty {
    double ImmunityTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `ImmunityTime`<sup>Optional</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclChallengeConfig <a name="Wafv2WebAclChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclChallengeConfig {
    Wafv2WebAclChallengeConfigImmunityTimeProperty ImmunityTimeProperty = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `ImmunityTimeProperty`<sup>Optional</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclChallengeConfigImmunityTimeProperty ImmunityTimeProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclChallengeConfigImmunityTimeProperty <a name="Wafv2WebAclChallengeConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclChallengeConfigImmunityTimeProperty {
    double ImmunityTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `ImmunityTime`<sup>Optional</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclConfig <a name="Wafv2WebAclConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    Wafv2WebAclDefaultAction DefaultAction,
    string Name,
    string Scope,
    Wafv2WebAclVisibilityConfig VisibilityConfig,
    Wafv2WebAclAssociationConfig AssociationConfig = null,
    Wafv2WebAclCaptchaConfig CaptchaConfig = null,
    Wafv2WebAclChallengeConfig ChallengeConfig = null,
    object CustomResponseBody = null,
    string Description = null,
    string Id = null,
    object Rule = null,
    string RuleJson = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string[] TokenDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig">AssociationConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | association_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig">ChallengeConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | challenge_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody">CustomResponseBody</a></code> | <code>object</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.ruleJson">RuleJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#rule_json Wafv2WebAcl#rule_json}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains">TokenDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction"></a>

```csharp
public Wafv2WebAclDefaultAction DefaultAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig"></a>

```csharp
public Wafv2WebAclVisibilityConfig VisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `AssociationConfig`<sup>Optional</sup> <a name="AssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig"></a>

```csharp
public Wafv2WebAclAssociationConfig AssociationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

association_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#association_config Wafv2WebAcl#association_config}

---

##### `CaptchaConfig`<sup>Optional</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig"></a>

```csharp
public Wafv2WebAclCaptchaConfig CaptchaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `ChallengeConfig`<sup>Optional</sup> <a name="ChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig"></a>

```csharp
public Wafv2WebAclChallengeConfig ChallengeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

challenge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#challenge_config Wafv2WebAcl#challenge_config}

---

##### `CustomResponseBody`<sup>Optional</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody"></a>

```csharp
public object CustomResponseBody { get; set; }
```

- *Type:* object

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}

---

##### `RuleJson`<sup>Optional</sup> <a name="RuleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.ruleJson"></a>

```csharp
public string RuleJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#rule_json Wafv2WebAcl#rule_json}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}.

---

##### `TokenDomains`<sup>Optional</sup> <a name="TokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains"></a>

```csharp
public string[] TokenDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}.

---

### Wafv2WebAclCustomResponseBody <a name="Wafv2WebAclCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCustomResponseBody {
    string Content,
    string ContentType,
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}.

---

### Wafv2WebAclDefaultAction <a name="Wafv2WebAclDefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultAction {
    Wafv2WebAclDefaultActionAllow Allow = null,
    Wafv2WebAclDefaultActionBlock Block = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | block block. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow"></a>

```csharp
public Wafv2WebAclDefaultActionAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `Block`<sup>Optional</sup> <a name="Block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block"></a>

```csharp
public Wafv2WebAclDefaultActionBlock Block { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

### Wafv2WebAclDefaultActionAllow <a name="Wafv2WebAclDefaultActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllow {
    Wafv2WebAclDefaultActionAllowCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclDefaultActionAllowCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandling <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclDefaultActionBlock <a name="Wafv2WebAclDefaultActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlock {
    Wafv2WebAclDefaultActionBlockCustomResponse CustomResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `CustomResponse`<sup>Optional</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse"></a>

```csharp
public Wafv2WebAclDefaultActionBlockCustomResponse CustomResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclDefaultActionBlockCustomResponse <a name="Wafv2WebAclDefaultActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockCustomResponse {
    double ResponseCode,
    string CustomResponseBodyKey = null,
    object ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode">ResponseCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader">ResponseHeader</a></code> | <code>object</code> | response_header block. |

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `CustomResponseBodyKey`<sup>Optional</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader"></a>

```csharp
public object ResponseHeader { get; set; }
```

- *Type:* object

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRule <a name="Wafv2WebAclRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRule {
    string Name,
    double Priority,
    Wafv2WebAclRuleVisibilityConfig VisibilityConfig,
    Wafv2WebAclRuleAction Action = null,
    Wafv2WebAclRuleCaptchaConfig CaptchaConfig = null,
    Wafv2WebAclRuleOverrideAction OverrideAction = null,
    object RuleLabel = null,
    object Statement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction">OverrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel">RuleLabel</a></code> | <code>object</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement">Statement</a></code> | <code>object</code> | statement block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig"></a>

```csharp
public Wafv2WebAclRuleVisibilityConfig VisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action"></a>

```csharp
public Wafv2WebAclRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}

---

##### `CaptchaConfig`<sup>Optional</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfig CaptchaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `OverrideAction`<sup>Optional</sup> <a name="OverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction"></a>

```csharp
public Wafv2WebAclRuleOverrideAction OverrideAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}

---

##### `RuleLabel`<sup>Optional</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel"></a>

```csharp
public object RuleLabel { get; set; }
```

- *Type:* object

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement"></a>

```csharp
public object Statement { get; set; }
```

- *Type:* object

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}

---

### Wafv2WebAclRuleAction <a name="Wafv2WebAclRuleAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleAction {
    Wafv2WebAclRuleActionAllow Allow = null,
    Wafv2WebAclRuleActionBlock Block = null,
    Wafv2WebAclRuleActionCaptcha Captcha = null,
    Wafv2WebAclRuleActionChallenge Challenge = null,
    Wafv2WebAclRuleActionCount Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | count block. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow"></a>

```csharp
public Wafv2WebAclRuleActionAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `Block`<sup>Optional</sup> <a name="Block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block"></a>

```csharp
public Wafv2WebAclRuleActionBlock Block { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

##### `Captcha`<sup>Optional</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha"></a>

```csharp
public Wafv2WebAclRuleActionCaptcha Captcha { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}

---

##### `Challenge`<sup>Optional</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge"></a>

```csharp
public Wafv2WebAclRuleActionChallenge Challenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count"></a>

```csharp
public Wafv2WebAclRuleActionCount Count { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

### Wafv2WebAclRuleActionAllow <a name="Wafv2WebAclRuleActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllow {
    Wafv2WebAclRuleActionAllowCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionAllowCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandling <a name="Wafv2WebAclRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionBlock <a name="Wafv2WebAclRuleActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlock {
    Wafv2WebAclRuleActionBlockCustomResponse CustomResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `CustomResponse`<sup>Optional</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse"></a>

```csharp
public Wafv2WebAclRuleActionBlockCustomResponse CustomResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclRuleActionBlockCustomResponse <a name="Wafv2WebAclRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockCustomResponse {
    double ResponseCode,
    string CustomResponseBodyKey = null,
    object ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode">ResponseCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader">ResponseHeader</a></code> | <code>object</code> | response_header block. |

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `CustomResponseBodyKey`<sup>Optional</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader"></a>

```csharp
public object ResponseHeader { get; set; }
```

- *Type:* object

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclRuleActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockCustomResponseResponseHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCaptcha <a name="Wafv2WebAclRuleActionCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptcha {
    Wafv2WebAclRuleActionCaptchaCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandling <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionChallenge <a name="Wafv2WebAclRuleActionChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallenge {
    Wafv2WebAclRuleActionChallengeCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionChallengeCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandling <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCount <a name="Wafv2WebAclRuleActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCount {
    Wafv2WebAclRuleActionCountCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionCountCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCountCustomRequestHandling <a name="Wafv2WebAclRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleCaptchaConfig <a name="Wafv2WebAclRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleCaptchaConfig {
    Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty ImmunityTimeProperty = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `ImmunityTimeProperty`<sup>Optional</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty ImmunityTimeProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty {
    double ImmunityTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `ImmunityTime`<sup>Optional</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclRuleOverrideAction <a name="Wafv2WebAclRuleOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideAction {
    Wafv2WebAclRuleOverrideActionCount Count = null,
    Wafv2WebAclRuleOverrideActionNone None = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | count block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none">None</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | none block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count"></a>

```csharp
public Wafv2WebAclRuleOverrideActionCount Count { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none"></a>

```csharp
public Wafv2WebAclRuleOverrideActionNone None { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}

---

### Wafv2WebAclRuleOverrideActionCount <a name="Wafv2WebAclRuleOverrideActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideActionCount {

};
```


### Wafv2WebAclRuleOverrideActionNone <a name="Wafv2WebAclRuleOverrideActionNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideActionNone {

};
```


### Wafv2WebAclRuleRuleLabel <a name="Wafv2WebAclRuleRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleRuleLabel {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

### Wafv2WebAclRuleVisibilityConfig <a name="Wafv2WebAclRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleVisibilityConfig {
    object CloudwatchMetricsEnabled,
    string MetricName,
    object SampledRequestsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

### Wafv2WebAclVisibilityConfig <a name="Wafv2WebAclVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclVisibilityConfig {
    object CloudwatchMetricsEnabled,
    string MetricName,
    object SampledRequestsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2WebAclAssociationConfigOutputReference <a name="Wafv2WebAclAssociationConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody">PutRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestBody` <a name="PutRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody"></a>

```csharp
private void PutRequestBody(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody"></a>

```csharp
private void ResetRequestBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody">RequestBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyList RequestBody { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a>

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput"></a>

```csharp
public object RequestBodyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---


### Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimitInput">DefaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="DefaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimitInput"></a>

```csharp
public string DefaultSizeInspectionLimitInput { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyApiGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---


### Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimitInput">DefaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="DefaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimitInput"></a>

```csharp
public string DefaultSizeInspectionLimitInput { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyAppRunnerService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---


### Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput">DefaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="DefaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput"></a>

```csharp
public string DefaultSizeInspectionLimitInput { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCloudfront InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---


### Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimitInput">DefaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="DefaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimitInput"></a>

```csharp
public string DefaultSizeInspectionLimitInput { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---


### Wafv2WebAclAssociationConfigRequestBodyList <a name="Wafv2WebAclAssociationConfigRequestBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get"></a>

```csharp
private Wafv2WebAclAssociationConfigRequestBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclAssociationConfigRequestBodyOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway">PutApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService">PutAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront">PutCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool">PutCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance">PutVerifiedAccessInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetApiGateway">ResetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetAppRunnerService">ResetAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront">ResetCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCognitoUserPool">ResetCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetVerifiedAccessInstance">ResetVerifiedAccessInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiGateway` <a name="PutApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway"></a>

```csharp
private void PutApiGateway(Wafv2WebAclAssociationConfigRequestBodyApiGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---

##### `PutAppRunnerService` <a name="PutAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService"></a>

```csharp
private void PutAppRunnerService(Wafv2WebAclAssociationConfigRequestBodyAppRunnerService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---

##### `PutCloudfront` <a name="PutCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront"></a>

```csharp
private void PutCloudfront(Wafv2WebAclAssociationConfigRequestBodyCloudfront Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---

##### `PutCognitoUserPool` <a name="PutCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool"></a>

```csharp
private void PutCognitoUserPool(Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---

##### `PutVerifiedAccessInstance` <a name="PutVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance"></a>

```csharp
private void PutVerifiedAccessInstance(Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---

##### `ResetApiGateway` <a name="ResetApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetApiGateway"></a>

```csharp
private void ResetApiGateway()
```

##### `ResetAppRunnerService` <a name="ResetAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetAppRunnerService"></a>

```csharp
private void ResetAppRunnerService()
```

##### `ResetCloudfront` <a name="ResetCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront"></a>

```csharp
private void ResetCloudfront()
```

##### `ResetCognitoUserPool` <a name="ResetCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCognitoUserPool"></a>

```csharp
private void ResetCognitoUserPool()
```

##### `ResetVerifiedAccessInstance` <a name="ResetVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetVerifiedAccessInstance"></a>

```csharp
private void ResetVerifiedAccessInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference">Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerService">AppRunnerService</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference">Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront">Cloudfront</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference">Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPool">CognitoUserPool</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstance">VerifiedAccessInstance</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGatewayInput">ApiGatewayInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerServiceInput">AppRunnerServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput">CloudfrontInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPoolInput">CognitoUserPoolInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstanceInput">VerifiedAccessInstanceInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGateway`<sup>Required</sup> <a name="ApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGateway"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference ApiGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference">Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference</a>

---

##### `AppRunnerService`<sup>Required</sup> <a name="AppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerService"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference AppRunnerService { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference">Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference</a>

---

##### `Cloudfront`<sup>Required</sup> <a name="Cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference Cloudfront { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference">Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference</a>

---

##### `CognitoUserPool`<sup>Required</sup> <a name="CognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPool"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference CognitoUserPool { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference</a>

---

##### `VerifiedAccessInstance`<sup>Required</sup> <a name="VerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstance"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference VerifiedAccessInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference</a>

---

##### `ApiGatewayInput`<sup>Optional</sup> <a name="ApiGatewayInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGatewayInput"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyApiGateway ApiGatewayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---

##### `AppRunnerServiceInput`<sup>Optional</sup> <a name="AppRunnerServiceInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerServiceInput"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyAppRunnerService AppRunnerServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---

##### `CloudfrontInput`<sup>Optional</sup> <a name="CloudfrontInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCloudfront CloudfrontInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---

##### `CognitoUserPoolInput`<sup>Optional</sup> <a name="CognitoUserPoolInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPoolInput"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool CognitoUserPoolInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---

##### `VerifiedAccessInstanceInput`<sup>Optional</sup> <a name="VerifiedAccessInstanceInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstanceInput"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance VerifiedAccessInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimitInput">DefaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimit">DefaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="DefaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimitInput"></a>

```csharp
public string DefaultSizeInspectionLimitInput { get; }
```

- *Type:* string

---

##### `DefaultSizeInspectionLimit`<sup>Required</sup> <a name="DefaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimit"></a>

```csharp
public string DefaultSizeInspectionLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---


### Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">ResetImmunityTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmunityTime` <a name="ResetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```csharp
private void ResetImmunityTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">ImmunityTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeInput`<sup>Optional</sup> <a name="ImmunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```csharp
public double ImmunityTimeInput { get; }
```

- *Type:* double

---

##### `ImmunityTime`<sup>Required</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclCaptchaConfigImmunityTimeProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclCaptchaConfigOutputReference <a name="Wafv2WebAclCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCaptchaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty">PutImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty">ResetImmunityTimeProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImmunityTimeProperty` <a name="PutImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```csharp
private void PutImmunityTimeProperty(Wafv2WebAclCaptchaConfigImmunityTimeProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---

##### `ResetImmunityTimeProperty` <a name="ResetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```csharp
private void ResetImmunityTimeProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput">ImmunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeProperty`<sup>Required</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference ImmunityTimeProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `ImmunityTimePropertyInput`<sup>Optional</sup> <a name="ImmunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```csharp
public Wafv2WebAclCaptchaConfigImmunityTimeProperty ImmunityTimePropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclCaptchaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---


### Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime">ResetImmunityTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmunityTime` <a name="ResetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```csharp
private void ResetImmunityTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">ImmunityTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeInput`<sup>Optional</sup> <a name="ImmunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```csharp
public double ImmunityTimeInput { get; }
```

- *Type:* double

---

##### `ImmunityTime`<sup>Required</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclChallengeConfigImmunityTimeProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---


### Wafv2WebAclChallengeConfigOutputReference <a name="Wafv2WebAclChallengeConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclChallengeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty">PutImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty">ResetImmunityTimeProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImmunityTimeProperty` <a name="PutImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty"></a>

```csharp
private void PutImmunityTimeProperty(Wafv2WebAclChallengeConfigImmunityTimeProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---

##### `ResetImmunityTimeProperty` <a name="ResetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty"></a>

```csharp
private void ResetImmunityTimeProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput">ImmunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeProperty`<sup>Required</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference ImmunityTimeProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a>

---

##### `ImmunityTimePropertyInput`<sup>Optional</sup> <a name="ImmunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput"></a>

```csharp
public Wafv2WebAclChallengeConfigImmunityTimeProperty ImmunityTimePropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclChallengeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---


### Wafv2WebAclCustomResponseBodyList <a name="Wafv2WebAclCustomResponseBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCustomResponseBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get"></a>

```csharp
private Wafv2WebAclCustomResponseBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclCustomResponseBodyOutputReference <a name="Wafv2WebAclCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclCustomResponseBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclDefaultActionAllowCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclDefaultActionAllowOutputReference <a name="Wafv2WebAclDefaultActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2WebAclDefaultActionAllowCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2WebAclDefaultActionAllowCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclDefaultActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockCustomResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">ResetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```csharp
private void PutResponseHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomResponseBodyKey` <a name="ResetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```csharp
private void ResetCustomResponseBodyKey()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">CustomResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```csharp
public Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList ResponseHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a>

---

##### `CustomResponseBodyKeyInput`<sup>Optional</sup> <a name="CustomResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```csharp
public string CustomResponseBodyKeyInput { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```csharp
public object ResponseHeaderInput { get; }
```

- *Type:* object

---

##### `CustomResponseBodyKey`<sup>Required</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; }
```

- *Type:* string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclDefaultActionBlockCustomResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get"></a>

```csharp
private Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclDefaultActionBlockOutputReference <a name="Wafv2WebAclDefaultActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse">PutCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse">ResetCustomResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomResponse` <a name="PutCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse"></a>

```csharp
private void PutCustomResponse(Wafv2WebAclDefaultActionBlockCustomResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---

##### `ResetCustomResponse` <a name="ResetCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse"></a>

```csharp
private void ResetCustomResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput">CustomResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomResponse`<sup>Required</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse"></a>

```csharp
public Wafv2WebAclDefaultActionBlockCustomResponseOutputReference CustomResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a>

---

##### `CustomResponseInput`<sup>Optional</sup> <a name="CustomResponseInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput"></a>

```csharp
public Wafv2WebAclDefaultActionBlockCustomResponse CustomResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclDefaultActionBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---


### Wafv2WebAclDefaultActionOutputReference <a name="Wafv2WebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclDefaultActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock">PutBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock">ResetBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow"></a>

```csharp
private void PutAllow(Wafv2WebAclDefaultActionAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---

##### `PutBlock` <a name="PutBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock"></a>

```csharp
private void PutBlock(Wafv2WebAclDefaultActionBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetBlock` <a name="ResetBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock"></a>

```csharp
private void ResetBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput">BlockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow"></a>

```csharp
public Wafv2WebAclDefaultActionAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a>

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block"></a>

```csharp
public Wafv2WebAclDefaultActionBlockOutputReference Block { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput"></a>

```csharp
public Wafv2WebAclDefaultActionAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---

##### `BlockInput`<sup>Optional</sup> <a name="BlockInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput"></a>

```csharp
public Wafv2WebAclDefaultActionBlock BlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclDefaultAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionAllowCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionAllowOutputReference <a name="Wafv2WebAclRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2WebAclRuleActionAllowCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2WebAclRuleActionAllowCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockCustomResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">ResetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```csharp
private void PutResponseHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomResponseBodyKey` <a name="ResetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```csharp
private void ResetCustomResponseBodyKey()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">CustomResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```csharp
public Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList ResponseHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `CustomResponseBodyKeyInput`<sup>Optional</sup> <a name="CustomResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```csharp
public string CustomResponseBodyKeyInput { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```csharp
public object ResponseHeaderInput { get; }
```

- *Type:* object

---

##### `CustomResponseBodyKey`<sup>Required</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; }
```

- *Type:* string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionBlockCustomResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```csharp
private Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionBlockOutputReference <a name="Wafv2WebAclRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse">PutCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse">ResetCustomResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomResponse` <a name="PutCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse"></a>

```csharp
private void PutCustomResponse(Wafv2WebAclRuleActionBlockCustomResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---

##### `ResetCustomResponse` <a name="ResetCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse"></a>

```csharp
private void ResetCustomResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput">CustomResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomResponse`<sup>Required</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse"></a>

```csharp
public Wafv2WebAclRuleActionBlockCustomResponseOutputReference CustomResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a>

---

##### `CustomResponseInput`<sup>Optional</sup> <a name="CustomResponseInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput"></a>

```csharp
public Wafv2WebAclRuleActionBlockCustomResponse CustomResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCaptchaOutputReference <a name="Wafv2WebAclRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCaptchaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2WebAclRuleActionCaptchaCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionCaptcha InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionChallengeCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionChallengeOutputReference <a name="Wafv2WebAclRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2WebAclRuleActionChallengeCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2WebAclRuleActionChallengeCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionCountCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCountOutputReference <a name="Wafv2WebAclRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2WebAclRuleActionCountCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2WebAclRuleActionCountCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleActionCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---


### Wafv2WebAclRuleActionOutputReference <a name="Wafv2WebAclRuleActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock">PutBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha">PutCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge">PutChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount">PutCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock">ResetBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha">ResetCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge">ResetChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow"></a>

```csharp
private void PutAllow(Wafv2WebAclRuleActionAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---

##### `PutBlock` <a name="PutBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock"></a>

```csharp
private void PutBlock(Wafv2WebAclRuleActionBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---

##### `PutCaptcha` <a name="PutCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha"></a>

```csharp
private void PutCaptcha(Wafv2WebAclRuleActionCaptcha Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---

##### `PutChallenge` <a name="PutChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge"></a>

```csharp
private void PutChallenge(Wafv2WebAclRuleActionChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---

##### `PutCount` <a name="PutCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount"></a>

```csharp
private void PutCount(Wafv2WebAclRuleActionCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetBlock` <a name="ResetBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock"></a>

```csharp
private void ResetBlock()
```

##### `ResetCaptcha` <a name="ResetCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha"></a>

```csharp
private void ResetCaptcha()
```

##### `ResetChallenge` <a name="ResetChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge"></a>

```csharp
private void ResetChallenge()
```

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput">BlockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput">CaptchaInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput">ChallengeInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput">CountInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow"></a>

```csharp
public Wafv2WebAclRuleActionAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a>

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block"></a>

```csharp
public Wafv2WebAclRuleActionBlockOutputReference Block { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a>

---

##### `Captcha`<sup>Required</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha"></a>

```csharp
public Wafv2WebAclRuleActionCaptchaOutputReference Captcha { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a>

---

##### `Challenge`<sup>Required</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge"></a>

```csharp
public Wafv2WebAclRuleActionChallengeOutputReference Challenge { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count"></a>

```csharp
public Wafv2WebAclRuleActionCountOutputReference Count { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput"></a>

```csharp
public Wafv2WebAclRuleActionAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---

##### `BlockInput`<sup>Optional</sup> <a name="BlockInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput"></a>

```csharp
public Wafv2WebAclRuleActionBlock BlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---

##### `CaptchaInput`<sup>Optional</sup> <a name="CaptchaInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput"></a>

```csharp
public Wafv2WebAclRuleActionCaptcha CaptchaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---

##### `ChallengeInput`<sup>Optional</sup> <a name="ChallengeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput"></a>

```csharp
public Wafv2WebAclRuleActionChallenge ChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput"></a>

```csharp
public Wafv2WebAclRuleActionCount CountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---


### Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">ResetImmunityTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmunityTime` <a name="ResetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```csharp
private void ResetImmunityTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">ImmunityTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeInput`<sup>Optional</sup> <a name="ImmunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```csharp
public double ImmunityTimeInput { get; }
```

- *Type:* double

---

##### `ImmunityTime`<sup>Required</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclRuleCaptchaConfigOutputReference <a name="Wafv2WebAclRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleCaptchaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty">PutImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">ResetImmunityTimeProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImmunityTimeProperty` <a name="PutImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```csharp
private void PutImmunityTimeProperty(Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `ResetImmunityTimeProperty` <a name="ResetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```csharp
private void ResetImmunityTimeProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">ImmunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeProperty`<sup>Required</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference ImmunityTimeProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `ImmunityTimePropertyInput`<sup>Optional</sup> <a name="ImmunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty ImmunityTimePropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---


### Wafv2WebAclRuleList <a name="Wafv2WebAclRuleList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get"></a>

```csharp
private Wafv2WebAclRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleOutputReference <a name="Wafv2WebAclRuleOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig">PutCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction">PutOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel">PutRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig">ResetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction">ResetOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel">ResetRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction"></a>

```csharp
private void PutAction(Wafv2WebAclRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---

##### `PutCaptchaConfig` <a name="PutCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig"></a>

```csharp
private void PutCaptchaConfig(Wafv2WebAclRuleCaptchaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---

##### `PutOverrideAction` <a name="PutOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction"></a>

```csharp
private void PutOverrideAction(Wafv2WebAclRuleOverrideAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---

##### `PutRuleLabel` <a name="PutRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel"></a>

```csharp
private void PutRuleLabel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* object

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig"></a>

```csharp
private void PutVisibilityConfig(Wafv2WebAclRuleVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCaptchaConfig` <a name="ResetCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig"></a>

```csharp
private void ResetCaptchaConfig()
```

##### `ResetOverrideAction` <a name="ResetOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction"></a>

```csharp
private void ResetOverrideAction()
```

##### `ResetRuleLabel` <a name="ResetRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel"></a>

```csharp
private void ResetRuleLabel()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement"></a>

```csharp
private void ResetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction">OverrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel">RuleLabel</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput">StatementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput">CaptchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput">OverrideActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput">RuleLabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement">Statement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action"></a>

```csharp
public Wafv2WebAclRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a>

---

##### `CaptchaConfig`<sup>Required</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfigOutputReference CaptchaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a>

---

##### `OverrideAction`<sup>Required</sup> <a name="OverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction"></a>

```csharp
public Wafv2WebAclRuleOverrideActionOutputReference OverrideAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a>

---

##### `RuleLabel`<sup>Required</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel"></a>

```csharp
public Wafv2WebAclRuleRuleLabelList RuleLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a>

---

##### `StatementInput`<sup>Required</sup> <a name="StatementInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput"></a>

```csharp
public object StatementInput { get; }
```

- *Type:* object

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig"></a>

```csharp
public Wafv2WebAclRuleVisibilityConfigOutputReference VisibilityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput"></a>

```csharp
public Wafv2WebAclRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---

##### `CaptchaConfigInput`<sup>Optional</sup> <a name="CaptchaConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput"></a>

```csharp
public Wafv2WebAclRuleCaptchaConfig CaptchaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverrideActionInput`<sup>Optional</sup> <a name="OverrideActionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput"></a>

```csharp
public Wafv2WebAclRuleOverrideAction OverrideActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RuleLabelInput`<sup>Optional</sup> <a name="RuleLabelInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput"></a>

```csharp
public object RuleLabelInput { get; }
```

- *Type:* object

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput"></a>

```csharp
public Wafv2WebAclRuleVisibilityConfig VisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement"></a>

```csharp
public object Statement { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleOverrideActionCountOutputReference <a name="Wafv2WebAclRuleOverrideActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideActionCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleOverrideActionCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---


### Wafv2WebAclRuleOverrideActionNoneOutputReference <a name="Wafv2WebAclRuleOverrideActionNoneOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideActionNoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleOverrideActionNone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---


### Wafv2WebAclRuleOverrideActionOutputReference <a name="Wafv2WebAclRuleOverrideActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleOverrideActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount">PutCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone">PutNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCount` <a name="PutCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount"></a>

```csharp
private void PutCount(Wafv2WebAclRuleOverrideActionCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---

##### `PutNone` <a name="PutNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone"></a>

```csharp
private void PutNone(Wafv2WebAclRuleOverrideActionNone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetNone` <a name="ResetNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none">None</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput">CountInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput">NoneInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count"></a>

```csharp
public Wafv2WebAclRuleOverrideActionCountOutputReference Count { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a>

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none"></a>

```csharp
public Wafv2WebAclRuleOverrideActionNoneOutputReference None { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput"></a>

```csharp
public Wafv2WebAclRuleOverrideActionCount CountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput"></a>

```csharp
public Wafv2WebAclRuleOverrideActionNone NoneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleOverrideAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---


### Wafv2WebAclRuleRuleLabelList <a name="Wafv2WebAclRuleRuleLabelList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleRuleLabelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get"></a>

```csharp
private Wafv2WebAclRuleRuleLabelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleRuleLabelOutputReference <a name="Wafv2WebAclRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleRuleLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2WebAclRuleVisibilityConfigOutputReference <a name="Wafv2WebAclRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclRuleVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```csharp
public object CloudwatchMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```csharp
public object SampledRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclRuleVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---


### Wafv2WebAclVisibilityConfigOutputReference <a name="Wafv2WebAclVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2WebAclVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```csharp
public object CloudwatchMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```csharp
public object SampledRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2WebAclVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---



