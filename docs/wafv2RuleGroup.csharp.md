# `wafv2RuleGroup` Submodule <a name="`wafv2RuleGroup` Submodule" id="@cdktf/provider-aws.wafv2RuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RuleGroup <a name="Wafv2RuleGroup" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroup(Construct Scope, string Id, Wafv2RuleGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody">PutCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody">ResetCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomResponseBody` <a name="PutCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody"></a>

```csharp
private void PutCustomResponseBody(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody.parameter.value"></a>

- *Type:* object

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule.parameter.value"></a>

- *Type:* object

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig"></a>

```csharp
private void PutVisibilityConfig(Wafv2RuleGroupVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `ResetCustomResponseBody` <a name="ResetCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody"></a>

```csharp
private void ResetCustomResponseBody()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2RuleGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2RuleGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2RuleGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Wafv2RuleGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Wafv2RuleGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Wafv2RuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2RuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody">CustomResponseBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken">LockToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput">CustomResponseBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomResponseBody`<sup>Required</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody"></a>

```csharp
public Wafv2RuleGroupCustomResponseBodyList CustomResponseBody { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a>

---

##### `LockToken`<sup>Required</sup> <a name="LockToken" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken"></a>

```csharp
public string LockToken { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule"></a>

```csharp
public Wafv2RuleGroupRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a>

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig"></a>

```csharp
public Wafv2RuleGroupVisibilityConfigOutputReference VisibilityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `CustomResponseBodyInput`<sup>Optional</sup> <a name="CustomResponseBodyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput"></a>

```csharp
public object CustomResponseBodyInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput"></a>

```csharp
public Wafv2RuleGroupVisibilityConfig VisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RuleGroupConfig <a name="Wafv2RuleGroupConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Capacity,
    string Scope,
    Wafv2RuleGroupVisibilityConfig VisibilityConfig,
    object CustomResponseBody = null,
    string Description = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    string Region = null,
    object Rule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody">CustomResponseBody</a></code> | <code>object</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig"></a>

```csharp
public Wafv2RuleGroupVisibilityConfig VisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `CustomResponseBody`<sup>Optional</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody"></a>

```csharp
public object CustomResponseBody { get; set; }
```

- *Type:* object

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#region Wafv2RuleGroup#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}.

---

### Wafv2RuleGroupCustomResponseBody <a name="Wafv2RuleGroupCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupCustomResponseBody {
    string Content,
    string ContentType,
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}.

---

### Wafv2RuleGroupRule <a name="Wafv2RuleGroupRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRule {
    Wafv2RuleGroupRuleAction Action,
    string Name,
    double Priority,
    Wafv2RuleGroupRuleVisibilityConfig VisibilityConfig,
    Wafv2RuleGroupRuleCaptchaConfig CaptchaConfig = null,
    object RuleLabel = null,
    object Statement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel">RuleLabel</a></code> | <code>object</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement">Statement</a></code> | <code>object</code> | statement block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action"></a>

```csharp
public Wafv2RuleGroupRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig"></a>

```csharp
public Wafv2RuleGroupRuleVisibilityConfig VisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `CaptchaConfig`<sup>Optional</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfig CaptchaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}

---

##### `RuleLabel`<sup>Optional</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel"></a>

```csharp
public object RuleLabel { get; set; }
```

- *Type:* object

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement"></a>

```csharp
public object Statement { get; set; }
```

- *Type:* object

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}

---

### Wafv2RuleGroupRuleAction <a name="Wafv2RuleGroupRuleAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleAction {
    Wafv2RuleGroupRuleActionAllow Allow = null,
    Wafv2RuleGroupRuleActionBlock Block = null,
    Wafv2RuleGroupRuleActionCaptcha Captcha = null,
    Wafv2RuleGroupRuleActionChallenge Challenge = null,
    Wafv2RuleGroupRuleActionCount Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | count block. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow"></a>

```csharp
public Wafv2RuleGroupRuleActionAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}

---

##### `Block`<sup>Optional</sup> <a name="Block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block"></a>

```csharp
public Wafv2RuleGroupRuleActionBlock Block { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}

---

##### `Captcha`<sup>Optional</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptcha Captcha { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}

---

##### `Challenge`<sup>Optional</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge"></a>

```csharp
public Wafv2RuleGroupRuleActionChallenge Challenge { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count"></a>

```csharp
public Wafv2RuleGroupRuleActionCount Count { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}

---

### Wafv2RuleGroupRuleActionAllow <a name="Wafv2RuleGroupRuleActionAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllow {
    Wafv2RuleGroupRuleActionAllowCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandling <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionBlock <a name="Wafv2RuleGroupRuleActionBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlock {
    Wafv2RuleGroupRuleActionBlockCustomResponse CustomResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `CustomResponse`<sup>Optional</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockCustomResponse CustomResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}

---

### Wafv2RuleGroupRuleActionBlockCustomResponse <a name="Wafv2RuleGroupRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockCustomResponse {
    double ResponseCode,
    string CustomResponseBodyKey = null,
    object ResponseHeader = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode">ResponseCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader">ResponseHeader</a></code> | <code>object</code> | response_header block. |

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}.

---

##### `CustomResponseBodyKey`<sup>Optional</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}.

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader"></a>

```csharp
public object ResponseHeader { get; set; }
```

- *Type:* object

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}

---

### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCaptcha <a name="Wafv2RuleGroupRuleActionCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptcha {
    Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionChallenge <a name="Wafv2RuleGroupRuleActionChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallenge {
    Wafv2RuleGroupRuleActionChallengeCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandling <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCount <a name="Wafv2RuleGroupRuleActionCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCount {
    Wafv2RuleGroupRuleActionCountCustomRequestHandling CustomRequestHandling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionCountCustomRequestHandling CustomRequestHandling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountCustomRequestHandling {
    object InsertHeader
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>object</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```csharp
public object InsertHeader { get; set; }
```

- *Type:* object

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleCaptchaConfig <a name="Wafv2RuleGroupRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleCaptchaConfig {
    Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty ImmunityTimeProperty = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `ImmunityTimeProperty`<sup>Optional</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty ImmunityTimeProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}

---

### Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty {
    double ImmunityTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}. |

---

##### `ImmunityTime`<sup>Optional</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}.

---

### Wafv2RuleGroupRuleRuleLabel <a name="Wafv2RuleGroupRuleRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleRuleLabel {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

### Wafv2RuleGroupRuleVisibilityConfig <a name="Wafv2RuleGroupRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleVisibilityConfig {
    object CloudwatchMetricsEnabled,
    string MetricName,
    object SampledRequestsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

### Wafv2RuleGroupVisibilityConfig <a name="Wafv2RuleGroupVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupVisibilityConfig {
    object CloudwatchMetricsEnabled,
    string MetricName,
    object SampledRequestsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RuleGroupCustomResponseBodyList <a name="Wafv2RuleGroupCustomResponseBodyList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupCustomResponseBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get"></a>

```csharp
private Wafv2RuleGroupCustomResponseBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupCustomResponseBodyOutputReference <a name="Wafv2RuleGroupCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupCustomResponseBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionAllowOutputReference <a name="Wafv2RuleGroupRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2RuleGroupRuleActionAllowCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">ResetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```csharp
private void PutResponseHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomResponseBodyKey` <a name="ResetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```csharp
private void ResetCustomResponseBodyKey()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```csharp
private void ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">CustomResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList ResponseHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `CustomResponseBodyKeyInput`<sup>Optional</sup> <a name="CustomResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```csharp
public string CustomResponseBodyKeyInput { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```csharp
public object ResponseHeaderInput { get; }
```

- *Type:* object

---

##### `CustomResponseBodyKey`<sup>Required</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; }
```

- *Type:* string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockCustomResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```csharp
private Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionBlockOutputReference <a name="Wafv2RuleGroupRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse">PutCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse">ResetCustomResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomResponse` <a name="PutCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse"></a>

```csharp
private void PutCustomResponse(Wafv2RuleGroupRuleActionBlockCustomResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `ResetCustomResponse` <a name="ResetCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse"></a>

```csharp
private void ResetCustomResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput">CustomResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomResponse`<sup>Required</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference CustomResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a>

---

##### `CustomResponseInput`<sup>Optional</sup> <a name="CustomResponseInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockCustomResponse CustomResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCaptchaOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCaptchaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptcha InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionChallengeOutputReference <a name="Wafv2RuleGroupRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2RuleGroupRuleActionChallengeCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```csharp
private void PutInsertHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```csharp
public object InsertHeaderInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionCountCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCountOutputReference <a name="Wafv2RuleGroupRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling"></a>

```csharp
private void PutCustomRequestHandling(Wafv2RuleGroupRuleActionCountCustomRequestHandling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```csharp
private void ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling"></a>

```csharp
public Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```csharp
public Wafv2RuleGroupRuleActionCountCustomRequestHandling CustomRequestHandlingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleActionCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---


### Wafv2RuleGroupRuleActionOutputReference <a name="Wafv2RuleGroupRuleActionOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock">PutBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha">PutCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge">PutChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount">PutCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock">ResetBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha">ResetCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge">ResetChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow"></a>

```csharp
private void PutAllow(Wafv2RuleGroupRuleActionAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `PutBlock` <a name="PutBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock"></a>

```csharp
private void PutBlock(Wafv2RuleGroupRuleActionBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `PutCaptcha` <a name="PutCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha"></a>

```csharp
private void PutCaptcha(Wafv2RuleGroupRuleActionCaptcha Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `PutChallenge` <a name="PutChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge"></a>

```csharp
private void PutChallenge(Wafv2RuleGroupRuleActionChallenge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `PutCount` <a name="PutCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount"></a>

```csharp
private void PutCount(Wafv2RuleGroupRuleActionCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetBlock` <a name="ResetBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock"></a>

```csharp
private void ResetBlock()
```

##### `ResetCaptcha` <a name="ResetCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha"></a>

```csharp
private void ResetCaptcha()
```

##### `ResetChallenge` <a name="ResetChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge"></a>

```csharp
private void ResetChallenge()
```

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput">BlockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput">CaptchaInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput">ChallengeInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput">CountInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow"></a>

```csharp
public Wafv2RuleGroupRuleActionAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a>

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block"></a>

```csharp
public Wafv2RuleGroupRuleActionBlockOutputReference Block { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a>

---

##### `Captcha`<sup>Required</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptchaOutputReference Captcha { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a>

---

##### `Challenge`<sup>Required</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge"></a>

```csharp
public Wafv2RuleGroupRuleActionChallengeOutputReference Challenge { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count"></a>

```csharp
public Wafv2RuleGroupRuleActionCountOutputReference Count { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput"></a>

```csharp
public Wafv2RuleGroupRuleActionAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `BlockInput`<sup>Optional</sup> <a name="BlockInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput"></a>

```csharp
public Wafv2RuleGroupRuleActionBlock BlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `CaptchaInput`<sup>Optional</sup> <a name="CaptchaInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput"></a>

```csharp
public Wafv2RuleGroupRuleActionCaptcha CaptchaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `ChallengeInput`<sup>Optional</sup> <a name="ChallengeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput"></a>

```csharp
public Wafv2RuleGroupRuleActionChallenge ChallengeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput"></a>

```csharp
public Wafv2RuleGroupRuleActionCount CountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---


### Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">ResetImmunityTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmunityTime` <a name="ResetImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```csharp
private void ResetImmunityTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">ImmunityTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">ImmunityTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeInput`<sup>Optional</sup> <a name="ImmunityTimeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```csharp
public double ImmunityTimeInput { get; }
```

- *Type:* double

---

##### `ImmunityTime`<sup>Required</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```csharp
public double ImmunityTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2RuleGroupRuleCaptchaConfigOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleCaptchaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty">PutImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">ResetImmunityTimeProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImmunityTimeProperty` <a name="PutImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```csharp
private void PutImmunityTimeProperty(Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `ResetImmunityTimeProperty` <a name="ResetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```csharp
private void ResetImmunityTimeProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">ImmunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmunityTimeProperty`<sup>Required</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference ImmunityTimeProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `ImmunityTimePropertyInput`<sup>Optional</sup> <a name="ImmunityTimePropertyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty ImmunityTimePropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---


### Wafv2RuleGroupRuleList <a name="Wafv2RuleGroupRuleList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get"></a>

```csharp
private Wafv2RuleGroupRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleOutputReference <a name="Wafv2RuleGroupRuleOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig">PutCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel">PutRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig">ResetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel">ResetRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction"></a>

```csharp
private void PutAction(Wafv2RuleGroupRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `PutCaptchaConfig` <a name="PutCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig"></a>

```csharp
private void PutCaptchaConfig(Wafv2RuleGroupRuleCaptchaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `PutRuleLabel` <a name="PutRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel"></a>

```csharp
private void PutRuleLabel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* object

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig"></a>

```csharp
private void PutVisibilityConfig(Wafv2RuleGroupRuleVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `ResetCaptchaConfig` <a name="ResetCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig"></a>

```csharp
private void ResetCaptchaConfig()
```

##### `ResetRuleLabel` <a name="ResetRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel"></a>

```csharp
private void ResetRuleLabel()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement"></a>

```csharp
private void ResetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel">RuleLabel</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput">StatementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput">CaptchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput">RuleLabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement">Statement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action"></a>

```csharp
public Wafv2RuleGroupRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a>

---

##### `CaptchaConfig`<sup>Required</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfigOutputReference CaptchaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a>

---

##### `RuleLabel`<sup>Required</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel"></a>

```csharp
public Wafv2RuleGroupRuleRuleLabelList RuleLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a>

---

##### `StatementInput`<sup>Required</sup> <a name="StatementInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput"></a>

```csharp
public object StatementInput { get; }
```

- *Type:* object

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig"></a>

```csharp
public Wafv2RuleGroupRuleVisibilityConfigOutputReference VisibilityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput"></a>

```csharp
public Wafv2RuleGroupRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `CaptchaConfigInput`<sup>Optional</sup> <a name="CaptchaConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput"></a>

```csharp
public Wafv2RuleGroupRuleCaptchaConfig CaptchaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RuleLabelInput`<sup>Optional</sup> <a name="RuleLabelInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput"></a>

```csharp
public object RuleLabelInput { get; }
```

- *Type:* object

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput"></a>

```csharp
public Wafv2RuleGroupRuleVisibilityConfig VisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement"></a>

```csharp
public object Statement { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleRuleLabelList <a name="Wafv2RuleGroupRuleRuleLabelList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleRuleLabelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get"></a>

```csharp
private Wafv2RuleGroupRuleRuleLabelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleRuleLabelOutputReference <a name="Wafv2RuleGroupRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleRuleLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Wafv2RuleGroupRuleVisibilityConfigOutputReference <a name="Wafv2RuleGroupRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupRuleVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```csharp
public object CloudwatchMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```csharp
public object SampledRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupRuleVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---


### Wafv2RuleGroupVisibilityConfigOutputReference <a name="Wafv2RuleGroupVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Wafv2RuleGroupVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```csharp
public object CloudwatchMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```csharp
public object SampledRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```csharp
public object CloudwatchMetricsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```csharp
public object SampledRequestsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public Wafv2RuleGroupVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---



