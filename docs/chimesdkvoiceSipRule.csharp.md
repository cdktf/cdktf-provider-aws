# `chimesdkvoiceSipRule` Submodule <a name="`chimesdkvoiceSipRule` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipRule <a name="ChimesdkvoiceSipRule" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipRule(Construct Scope, string Id, ChimesdkvoiceSipRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig">ChimesdkvoiceSipRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig">ChimesdkvoiceSipRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications">PutTargetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetApplications` <a name="PutTargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications"></a>

```csharp
private void PutTargetApplications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications.parameter.value"></a>

- *Type:* object

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChimesdkvoiceSipRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceSipRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChimesdkvoiceSipRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimesdkvoiceSipRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimesdkvoiceSipRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceSipRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications">TargetApplications</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput">TargetApplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput">TriggerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType">TriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue">TriggerValue</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetApplications`<sup>Required</sup> <a name="TargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications"></a>

```csharp
public ChimesdkvoiceSipRuleTargetApplicationsList TargetApplications { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetApplicationsInput`<sup>Optional</sup> <a name="TargetApplicationsInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput"></a>

```csharp
public object TargetApplicationsInput { get; }
```

- *Type:* object

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput"></a>

```csharp
public string TriggerTypeInput { get; }
```

- *Type:* string

---

##### `TriggerValueInput`<sup>Optional</sup> <a name="TriggerValueInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput"></a>

```csharp
public string TriggerValueInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType"></a>

```csharp
public string TriggerType { get; }
```

- *Type:* string

---

##### `TriggerValue`<sup>Required</sup> <a name="TriggerValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue"></a>

```csharp
public string TriggerValue { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipRuleConfig <a name="ChimesdkvoiceSipRuleConfig" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object TargetApplications,
    string TriggerType,
    string TriggerValue,
    object Disabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications">TargetApplications</a></code> | <code>object</code> | target_applications block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType">TriggerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue">TriggerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}.

---

##### `TargetApplications`<sup>Required</sup> <a name="TargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications"></a>

```csharp
public object TargetApplications { get; set; }
```

- *Type:* object

target_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType"></a>

```csharp
public string TriggerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}.

---

##### `TriggerValue`<sup>Required</sup> <a name="TriggerValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue"></a>

```csharp
public string TriggerValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceSipRuleTargetApplications <a name="ChimesdkvoiceSipRuleTargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipRuleTargetApplications {
    string AwsRegion,
    double Priority,
    string SipMediaApplicationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId">SipMediaApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}. |

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}.

---

##### `SipMediaApplicationId`<sup>Required</sup> <a name="SipMediaApplicationId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId"></a>

```csharp
public string SipMediaApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipRuleTargetApplicationsList <a name="ChimesdkvoiceSipRuleTargetApplicationsList" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipRuleTargetApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get"></a>

```csharp
private ChimesdkvoiceSipRuleTargetApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChimesdkvoiceSipRuleTargetApplicationsOutputReference <a name="ChimesdkvoiceSipRuleTargetApplicationsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceSipRuleTargetApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput">SipMediaApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId">SipMediaApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SipMediaApplicationIdInput`<sup>Optional</sup> <a name="SipMediaApplicationIdInput" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput"></a>

```csharp
public string SipMediaApplicationIdInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SipMediaApplicationId`<sup>Required</sup> <a name="SipMediaApplicationId" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId"></a>

```csharp
public string SipMediaApplicationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



