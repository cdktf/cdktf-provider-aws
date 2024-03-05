# `cleanroomsConfiguredTable` Submodule <a name="`cleanroomsConfiguredTable` Submodule" id="@cdktf/provider-aws.cleanroomsConfiguredTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTable <a name="CleanroomsConfiguredTable" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table aws_cleanrooms_configured_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTable(Construct Scope, string Id, CleanroomsConfiguredTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference">PutTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTableReference` <a name="PutTableReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference"></a>

```csharp
private void PutTableReference(CleanroomsConfiguredTableTableReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts"></a>

```csharp
private void PutTimeouts(CleanroomsConfiguredTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CleanroomsConfiguredTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CleanroomsConfiguredTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CleanroomsConfiguredTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CleanroomsConfiguredTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CleanroomsConfiguredTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CleanroomsConfiguredTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsConfiguredTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsConfiguredTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference">TableReference</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference">CleanroomsConfiguredTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput">AllowedColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput">AnalysisMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput">TableReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns">AllowedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod">AnalysisMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceOutputReference TableReference { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeouts"></a>

```csharp
public CleanroomsConfiguredTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference">CleanroomsConfiguredTableTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowedColumnsInput`<sup>Optional</sup> <a name="AllowedColumnsInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput"></a>

```csharp
public string[] AllowedColumnsInput { get; }
```

- *Type:* string[]

---

##### `AnalysisMethodInput`<sup>Optional</sup> <a name="AnalysisMethodInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput"></a>

```csharp
public string AnalysisMethodInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TableReferenceInput`<sup>Optional</sup> <a name="TableReferenceInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput"></a>

```csharp
public CleanroomsConfiguredTableTableReference TableReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns"></a>

```csharp
public string[] AllowedColumns { get; }
```

- *Type:* string[]

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod"></a>

```csharp
public string AnalysisMethod { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableConfig <a name="CleanroomsConfiguredTableConfig" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedColumns,
    string AnalysisMethod,
    string Name,
    CleanroomsConfiguredTableTableReference TableReference,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    CleanroomsConfiguredTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns">AllowedColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod">AnalysisMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference">TableReference</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | table_reference block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns"></a>

```csharp
public string[] AllowedColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}.

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod"></a>

```csharp
public string AnalysisMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference"></a>

```csharp
public CleanroomsConfiguredTableTableReference TableReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

table_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.timeouts"></a>

```csharp
public CleanroomsConfiguredTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts">CleanroomsConfiguredTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#timeouts CleanroomsConfiguredTable#timeouts}

---

### CleanroomsConfiguredTableTableReference <a name="CleanroomsConfiguredTableTableReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTableTableReference {
    string DatabaseName,
    string TableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

### CleanroomsConfiguredTableTimeouts <a name="CleanroomsConfiguredTableTimeouts" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableTableReferenceOutputReference <a name="CleanroomsConfiguredTableTableReferenceOutputReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTableTableReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue"></a>

```csharp
public CleanroomsConfiguredTableTableReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---


### CleanroomsConfiguredTableTimeoutsOutputReference <a name="CleanroomsConfiguredTableTimeoutsOutputReference" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CleanroomsConfiguredTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsConfiguredTable.CleanroomsConfiguredTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



