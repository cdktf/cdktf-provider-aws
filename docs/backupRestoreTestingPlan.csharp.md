# `backupRestoreTestingPlan` Submodule <a name="`backupRestoreTestingPlan` Submodule" id="@cdktf/provider-aws.backupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingPlan <a name="BackupRestoreTestingPlan" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupRestoreTestingPlan(Construct Scope, string Id, BackupRestoreTestingPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig">BackupRestoreTestingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection">PutRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection">ResetRecoveryPointSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours">ResetStartWindowHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecoveryPointSelection` <a name="PutRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection"></a>

```csharp
private void PutRecoveryPointSelection(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection.parameter.value"></a>

- *Type:* object

---

##### `ResetRecoveryPointSelection` <a name="ResetRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection"></a>

```csharp
private void ResetRecoveryPointSelection()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone"></a>

```csharp
private void ResetScheduleExpressionTimezone()
```

##### `ResetStartWindowHours` <a name="ResetStartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours"></a>

```csharp
private void ResetStartWindowHours()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupRestoreTestingPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupRestoreTestingPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupRestoreTestingPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BackupRestoreTestingPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupRestoreTestingPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput">RecoveryPointSelectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput">StartWindowHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours">StartWindowHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```csharp
public BackupRestoreTestingPlanRecoveryPointSelectionList RecoveryPointSelection { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryPointSelectionInput`<sup>Optional</sup> <a name="RecoveryPointSelectionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput"></a>

```csharp
public object RecoveryPointSelectionInput { get; }
```

- *Type:* object

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput"></a>

```csharp
public string ScheduleExpressionTimezoneInput { get; }
```

- *Type:* string

---

##### `StartWindowHoursInput`<sup>Optional</sup> <a name="StartWindowHoursInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput"></a>

```csharp
public double StartWindowHoursInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; }
```

- *Type:* string

---

##### `StartWindowHours`<sup>Required</sup> <a name="StartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours"></a>

```csharp
public double StartWindowHours { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingPlanConfig <a name="BackupRestoreTestingPlanConfig" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupRestoreTestingPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ScheduleExpression,
    object RecoveryPointSelection = null,
    string ScheduleExpressionTimezone = null,
    double StartWindowHours = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code>object</code> | recovery_point_selection block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours">StartWindowHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}.

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `RecoveryPointSelection`<sup>Optional</sup> <a name="RecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection"></a>

```csharp
public object RecoveryPointSelection { get; set; }
```

- *Type:* object

recovery_point_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `StartWindowHours`<sup>Optional</sup> <a name="StartWindowHours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours"></a>

```csharp
public double StartWindowHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

### BackupRestoreTestingPlanRecoveryPointSelection <a name="BackupRestoreTestingPlanRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupRestoreTestingPlanRecoveryPointSelection {
    string Algorithm,
    string[] IncludeVaults,
    string[] RecoveryPointTypes,
    string[] ExcludeVaults = null,
    double SelectionWindowDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults">IncludeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults">ExcludeVaults</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}.

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults"></a>

```csharp
public string[] IncludeVaults { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}.

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes"></a>

```csharp
public string[] RecoveryPointTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}.

---

##### `ExcludeVaults`<sup>Optional</sup> <a name="ExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults"></a>

```csharp
public string[] ExcludeVaults { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}.

---

##### `SelectionWindowDays`<sup>Optional</sup> <a name="SelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays"></a>

```csharp
public double SelectionWindowDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingPlanRecoveryPointSelectionList <a name="BackupRestoreTestingPlanRecoveryPointSelectionList" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupRestoreTestingPlanRecoveryPointSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get"></a>

```csharp
private BackupRestoreTestingPlanRecoveryPointSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="BackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BackupRestoreTestingPlanRecoveryPointSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults">ResetExcludeVaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays">ResetSelectionWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeVaults` <a name="ResetExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults"></a>

```csharp
private void ResetExcludeVaults()
```

##### `ResetSelectionWindowDays` <a name="ResetSelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays"></a>

```csharp
private void ResetSelectionWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput">ExcludeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput">IncludeVaultsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput">RecoveryPointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput">SelectionWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">ExcludeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">IncludeVaults</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ExcludeVaultsInput`<sup>Optional</sup> <a name="ExcludeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput"></a>

```csharp
public string[] ExcludeVaultsInput { get; }
```

- *Type:* string[]

---

##### `IncludeVaultsInput`<sup>Optional</sup> <a name="IncludeVaultsInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput"></a>

```csharp
public string[] IncludeVaultsInput { get; }
```

- *Type:* string[]

---

##### `RecoveryPointTypesInput`<sup>Optional</sup> <a name="RecoveryPointTypesInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput"></a>

```csharp
public string[] RecoveryPointTypesInput { get; }
```

- *Type:* string[]

---

##### `SelectionWindowDaysInput`<sup>Optional</sup> <a name="SelectionWindowDaysInput" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput"></a>

```csharp
public double SelectionWindowDaysInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ExcludeVaults`<sup>Required</sup> <a name="ExcludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```csharp
public string[] ExcludeVaults { get; }
```

- *Type:* string[]

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```csharp
public string[] IncludeVaults { get; }
```

- *Type:* string[]

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```csharp
public string[] RecoveryPointTypes { get; }
```

- *Type:* string[]

---

##### `SelectionWindowDays`<sup>Required</sup> <a name="SelectionWindowDays" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```csharp
public double SelectionWindowDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



