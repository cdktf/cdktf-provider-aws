# `configOrganizationCustomPolicyRule` Submodule <a name="`configOrganizationCustomPolicyRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomPolicyRule <a name="ConfigOrganizationCustomPolicyRule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomPolicyRule(Construct Scope, string Id, ConfigOrganizationCustomPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts">ResetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfigOrganizationCustomPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `ResetDebugLogDeliveryAccounts` <a name="ResetDebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts"></a>

```csharp
private void ResetDebugLogDeliveryAccounts()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope"></a>

```csharp
private void ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope"></a>

```csharp
private void ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope"></a>

```csharp
private void ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope"></a>

```csharp
private void ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomPolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationCustomPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput">DebugLogDeliveryAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput">PolicyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput">TriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText">PolicyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts"></a>

```csharp
public ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a>

---

##### `DebugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="DebugLogDeliveryAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput"></a>

```csharp
public string[] DebugLogDeliveryAccountsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput"></a>

```csharp
public string PolicyRuntimeInput { get; }
```

- *Type:* string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput"></a>

```csharp
public string PolicyTextInput { get; }
```

- *Type:* string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput"></a>

```csharp
public string ResourceIdScopeInput { get; }
```

- *Type:* string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput"></a>

```csharp
public string[] ResourceTypesScopeInput { get; }
```

- *Type:* string[]

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput"></a>

```csharp
public string TagKeyScopeInput { get; }
```

- *Type:* string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput"></a>

```csharp
public string TagValueScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerTypesInput`<sup>Optional</sup> <a name="TriggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput"></a>

```csharp
public string[] TriggerTypesInput { get; }
```

- *Type:* string[]

---

##### `DebugLogDeliveryAccounts`<sup>Required</sup> <a name="DebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts"></a>

```csharp
public string[] DebugLogDeliveryAccounts { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; }
```

- *Type:* string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText"></a>

```csharp
public string PolicyText { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomPolicyRuleConfig <a name="ConfigOrganizationCustomPolicyRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PolicyRuntime,
    string PolicyText,
    string[] TriggerTypes,
    string[] DebugLogDeliveryAccounts = null,
    string Description = null,
    string[] ExcludedAccounts = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    string ResourceIdScope = null,
    string[] ResourceTypesScope = null,
    string TagKeyScope = null,
    string TagValueScope = null,
    ConfigOrganizationCustomPolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText">PolicyText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText"></a>

```csharp
public string PolicyText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `DebugLogDeliveryAccounts`<sup>Optional</sup> <a name="DebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts"></a>

```csharp
public string[] DebugLogDeliveryAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts"></a>

```csharp
public ConfigOrganizationCustomPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

### ConfigOrganizationCustomPolicyRuleTimeouts <a name="ConfigOrganizationCustomPolicyRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



