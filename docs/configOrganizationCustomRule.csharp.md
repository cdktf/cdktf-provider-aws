# `configOrganizationCustomRule` Submodule <a name="`configOrganizationCustomRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomRule <a name="ConfigOrganizationCustomRule" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule aws_config_organization_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomRule(Construct Scope, string Id, ConfigOrganizationCustomRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig">ConfigOrganizationCustomRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig">ConfigOrganizationCustomRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfigOrganizationCustomRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceIdScope"></a>

```csharp
private void ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetResourceTypesScope"></a>

```csharp
private void ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagKeyScope"></a>

```csharp
private void ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTagValueScope"></a>

```csharp
private void ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigOrganizationCustomRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationCustomRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigOrganizationCustomRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationCustomRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationCustomRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput">TriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeouts"></a>

```csharp
public ConfigOrganizationCustomRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference">ConfigOrganizationCustomRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArnInput"></a>

```csharp
public string LambdaFunctionArnInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScopeInput"></a>

```csharp
public string ResourceIdScopeInput { get; }
```

- *Type:* string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScopeInput"></a>

```csharp
public string[] ResourceTypesScopeInput { get; }
```

- *Type:* string[]

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScopeInput"></a>

```csharp
public string TagKeyScopeInput { get; }
```

- *Type:* string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScopeInput"></a>

```csharp
public string TagValueScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerTypesInput`<sup>Optional</sup> <a name="TriggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypesInput"></a>

```csharp
public string[] TriggerTypesInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomRuleConfig <a name="ConfigOrganizationCustomRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LambdaFunctionArn,
    string Name,
    string[] TriggerTypes,
    string Description = null,
    string[] ExcludedAccounts = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    string Region = null,
    string ResourceIdScope = null,
    string[] ResourceTypesScope = null,
    string TagKeyScope = null,
    string TagValueScope = null,
    ConfigOrganizationCustomRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}.

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#region ConfigOrganizationCustomRule#region}

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleConfig.property.timeouts"></a>

```csharp
public ConfigOrganizationCustomRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts">ConfigOrganizationCustomRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}

---

### ConfigOrganizationCustomRuleTimeouts <a name="ConfigOrganizationCustomRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationCustomRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configOrganizationCustomRule.ConfigOrganizationCustomRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



