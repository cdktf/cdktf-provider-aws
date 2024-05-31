# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktf/provider-aws.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilter(Construct Scope, string Id, LakeformationDataCellsFilterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData">PutTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData">ResetTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTableData` <a name="PutTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData"></a>

```csharp
private void PutTableData(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts"></a>

```csharp
private void PutTimeouts(LakeformationDataCellsFilterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

---

##### `ResetTableData` <a name="ResetTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData"></a>

```csharp
private void ResetTableData()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationDataCellsFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationDataCellsFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationDataCellsFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationDataCellsFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData">TableData</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput">TableDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TableData`<sup>Required</sup> <a name="TableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData"></a>

```csharp
public LakeformationDataCellsFilterTableDataList TableData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts"></a>

```csharp
public LakeformationDataCellsFilterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a>

---

##### `TableDataInput`<sup>Optional</sup> <a name="TableDataInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput"></a>

```csharp
public object TableDataInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object TableData = null,
    LakeformationDataCellsFilterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData">TableData</a></code> | <code>object</code> | table_data block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TableData`<sup>Optional</sup> <a name="TableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData"></a>

```csharp
public object TableData { get; set; }
```

- *Type:* object

table_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts"></a>

```csharp
public LakeformationDataCellsFilterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}

---

### LakeformationDataCellsFilterTableData <a name="LakeformationDataCellsFilterTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableData {
    string DatabaseName,
    string Name,
    string TableCatalogId,
    string TableName,
    string[] ColumnNames = null,
    object ColumnWildcard = null,
    object RowFilter = null,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard">ColumnWildcard</a></code> | <code>object</code> | column_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter">RowFilter</a></code> | <code>object</code> | row_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}.

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}.

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard"></a>

```csharp
public object ColumnWildcard { get; set; }
```

- *Type:* object

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter"></a>

```csharp
public object RowFilter { get; set; }
```

- *Type:* object

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}.

---

### LakeformationDataCellsFilterTableDataColumnWildcard <a name="LakeformationDataCellsFilterTableDataColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataColumnWildcard {
    string[] ExcludedColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}.

---

### LakeformationDataCellsFilterTableDataRowFilter <a name="LakeformationDataCellsFilterTableDataRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilter {
    object AllRowsWildcard = null,
    string FilterExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>object</code> | all_rows_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression">FilterExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}. |

---

##### `AllRowsWildcard`<sup>Optional</sup> <a name="AllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard"></a>

```csharp
public object AllRowsWildcard { get; set; }
```

- *Type:* object

all_rows_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `FilterExpression`<sup>Optional</sup> <a name="FilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression"></a>

```csharp
public string FilterExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}.

---

### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard {

};
```


### LakeformationDataCellsFilterTimeouts <a name="LakeformationDataCellsFilterTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterTableDataColumnWildcardList <a name="LakeformationDataCellsFilterTableDataColumnWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataColumnWildcardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get"></a>

```csharp
private LakeformationDataCellsFilterTableDataColumnWildcardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataColumnWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataColumnWildcardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataList <a name="LakeformationDataCellsFilterTableDataList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get"></a>

```csharp
private LakeformationDataCellsFilterTableDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataOutputReference <a name="LakeformationDataCellsFilterTableDataOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard"></a>

```csharp
private void PutColumnWildcard(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* object

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter"></a>

```csharp
private void PutRowFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard"></a>

```csharp
private void ResetColumnWildcard()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter"></a>

```csharp
private void ResetRowFilter()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard"></a>

```csharp
public LakeformationDataCellsFilterTableDataColumnWildcardList ColumnWildcard { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter"></a>

```csharp
public LakeformationDataCellsFilterTableDataRowFilterList RowFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a>

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput"></a>

```csharp
public object ColumnWildcardInput { get; }
```

- *Type:* object

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput"></a>

```csharp
public object RowFilterInput { get; }
```

- *Type:* object

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput"></a>

```csharp
public string TableCatalogIdInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get"></a>

```csharp
private LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataRowFilterList <a name="LakeformationDataCellsFilterTableDataRowFilterList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get"></a>

```csharp
private LakeformationDataCellsFilterTableDataRowFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTableDataRowFilterOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTableDataRowFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard">PutAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard">ResetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression">ResetFilterExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllRowsWildcard` <a name="PutAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard"></a>

```csharp
private void PutAllRowsWildcard(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard.parameter.value"></a>

- *Type:* object

---

##### `ResetAllRowsWildcard` <a name="ResetAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard"></a>

```csharp
private void ResetAllRowsWildcard()
```

##### `ResetFilterExpression` <a name="ResetFilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression"></a>

```csharp
private void ResetFilterExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard">AllRowsWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput">AllRowsWildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput">FilterExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression">FilterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllRowsWildcard`<sup>Required</sup> <a name="AllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard"></a>

```csharp
public LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList AllRowsWildcard { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a>

---

##### `AllRowsWildcardInput`<sup>Optional</sup> <a name="AllRowsWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput"></a>

```csharp
public object AllRowsWildcardInput { get; }
```

- *Type:* object

---

##### `FilterExpressionInput`<sup>Optional</sup> <a name="FilterExpressionInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput"></a>

```csharp
public string FilterExpressionInput { get; }
```

- *Type:* string

---

##### `FilterExpression`<sup>Required</sup> <a name="FilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression"></a>

```csharp
public string FilterExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationDataCellsFilterTimeoutsOutputReference <a name="LakeformationDataCellsFilterTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationDataCellsFilterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



