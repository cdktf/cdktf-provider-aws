# `computeoptimizerEnrollmentStatus` Submodule <a name="`computeoptimizerEnrollmentStatus` Submodule" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerEnrollmentStatus <a name="ComputeoptimizerEnrollmentStatus" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComputeoptimizerEnrollmentStatus(Construct Scope, string Id, ComputeoptimizerEnrollmentStatusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts">ResetIncludeMemberAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeoptimizerEnrollmentStatusTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

---

##### `ResetIncludeMemberAccounts` <a name="ResetIncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts"></a>

```csharp
private void ResetIncludeMemberAccounts()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComputeoptimizerEnrollmentStatus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComputeoptimizerEnrollmentStatus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComputeoptimizerEnrollmentStatus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComputeoptimizerEnrollmentStatus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeoptimizerEnrollmentStatus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeoptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn">NumberOfMemberAccountsOptedIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput">IncludeMemberAccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NumberOfMemberAccountsOptedIn`<sup>Required</sup> <a name="NumberOfMemberAccountsOptedIn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn"></a>

```csharp
public double NumberOfMemberAccountsOptedIn { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts"></a>

```csharp
public ComputeoptimizerEnrollmentStatusTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a>

---

##### `IncludeMemberAccountsInput`<sup>Optional</sup> <a name="IncludeMemberAccountsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput"></a>

```csharp
public object IncludeMemberAccountsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `IncludeMemberAccounts`<sup>Required</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts"></a>

```csharp
public object IncludeMemberAccounts { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerEnrollmentStatusConfig <a name="ComputeoptimizerEnrollmentStatusConfig" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComputeoptimizerEnrollmentStatusConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Status,
    object IncludeMemberAccounts = null,
    string Region = null,
    ComputeoptimizerEnrollmentStatusTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}.

---

##### `IncludeMemberAccounts`<sup>Optional</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts"></a>

```csharp
public object IncludeMemberAccounts { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#region ComputeoptimizerEnrollmentStatus#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts"></a>

```csharp
public ComputeoptimizerEnrollmentStatusTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}

---

### ComputeoptimizerEnrollmentStatusTimeouts <a name="ComputeoptimizerEnrollmentStatusTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComputeoptimizerEnrollmentStatusTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerEnrollmentStatusTimeoutsOutputReference <a name="ComputeoptimizerEnrollmentStatusTimeoutsOutputReference" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComputeoptimizerEnrollmentStatusTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



