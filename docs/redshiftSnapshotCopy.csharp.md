# `redshiftSnapshotCopy` Submodule <a name="`redshiftSnapshotCopy` Submodule" id="@cdktf/provider-aws.redshiftSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopy <a name="RedshiftSnapshotCopy" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy aws_redshift_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftSnapshotCopy(Construct Scope, string Id, RedshiftSnapshotCopyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig">RedshiftSnapshotCopyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig">RedshiftSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetManualSnapshotRetentionPeriod">ResetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetSnapshotCopyGrantName">ResetSnapshotCopyGrantName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetManualSnapshotRetentionPeriod` <a name="ResetManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetManualSnapshotRetentionPeriod"></a>

```csharp
private void ResetManualSnapshotRetentionPeriod()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetSnapshotCopyGrantName` <a name="ResetSnapshotCopyGrantName" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.resetSnapshotCopyGrantName"></a>

```csharp
private void ResetSnapshotCopyGrantName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftSnapshotCopy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotCopy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotCopy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotCopy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotCopy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedshiftSnapshotCopy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftSnapshotCopy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.manualSnapshotRetentionPeriodInput">ManualSnapshotRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.snapshotCopyGrantNameInput">SnapshotCopyGrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.destinationRegionInput"></a>

```csharp
public string DestinationRegionInput { get; }
```

- *Type:* string

---

##### `ManualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.manualSnapshotRetentionPeriodInput"></a>

```csharp
public double ManualSnapshotRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `SnapshotCopyGrantNameInput`<sup>Optional</sup> <a name="SnapshotCopyGrantNameInput" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.snapshotCopyGrantNameInput"></a>

```csharp
public string SnapshotCopyGrantNameInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; }
```

- *Type:* string

---

##### `ManualSnapshotRetentionPeriod`<sup>Required</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.manualSnapshotRetentionPeriod"></a>

```csharp
public double ManualSnapshotRetentionPeriod { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyConfig <a name="RedshiftSnapshotCopyConfig" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftSnapshotCopyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterIdentifier,
    string DestinationRegion,
    double ManualSnapshotRetentionPeriod = null,
    string Region = null,
    double RetentionPeriod = null,
    string SnapshotCopyGrantName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#cluster_identifier RedshiftSnapshotCopy#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#destination_region RedshiftSnapshotCopy#destination_region}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#manual_snapshot_retention_period RedshiftSnapshotCopy#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#retention_period RedshiftSnapshotCopy#retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#snapshot_copy_grant_name RedshiftSnapshotCopy#snapshot_copy_grant_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#cluster_identifier RedshiftSnapshotCopy#cluster_identifier}.

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#destination_region RedshiftSnapshotCopy#destination_region}.

---

##### `ManualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.manualSnapshotRetentionPeriod"></a>

```csharp
public double ManualSnapshotRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#manual_snapshot_retention_period RedshiftSnapshotCopy#manual_snapshot_retention_period}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#region RedshiftSnapshotCopy#region}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#retention_period RedshiftSnapshotCopy#retention_period}.

---

##### `SnapshotCopyGrantName`<sup>Optional</sup> <a name="SnapshotCopyGrantName" id="@cdktf/provider-aws.redshiftSnapshotCopy.RedshiftSnapshotCopyConfig.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/redshift_snapshot_copy#snapshot_copy_grant_name RedshiftSnapshotCopy#snapshot_copy_grant_name}.

---



