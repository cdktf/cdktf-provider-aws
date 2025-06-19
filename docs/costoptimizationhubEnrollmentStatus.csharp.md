# `costoptimizationhubEnrollmentStatus` Submodule <a name="`costoptimizationhubEnrollmentStatus` Submodule" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostoptimizationhubEnrollmentStatus <a name="CostoptimizationhubEnrollmentStatus" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CostoptimizationhubEnrollmentStatus(Construct Scope, string Id, CostoptimizationhubEnrollmentStatusConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig">CostoptimizationhubEnrollmentStatusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig">CostoptimizationhubEnrollmentStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.resetIncludeMemberAccounts">ResetIncludeMemberAccounts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIncludeMemberAccounts` <a name="ResetIncludeMemberAccounts" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.resetIncludeMemberAccounts"></a>

```csharp
private void ResetIncludeMemberAccounts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CostoptimizationhubEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CostoptimizationhubEnrollmentStatus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CostoptimizationhubEnrollmentStatus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CostoptimizationhubEnrollmentStatus.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CostoptimizationhubEnrollmentStatus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CostoptimizationhubEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostoptimizationhubEnrollmentStatus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostoptimizationhubEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/costoptimizationhub_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CostoptimizationhubEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.includeMemberAccountsInput">IncludeMemberAccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `IncludeMemberAccountsInput`<sup>Optional</sup> <a name="IncludeMemberAccountsInput" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.includeMemberAccountsInput"></a>

```csharp
public object IncludeMemberAccountsInput { get; }
```

- *Type:* object

---

##### `IncludeMemberAccounts`<sup>Required</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.includeMemberAccounts"></a>

```csharp
public object IncludeMemberAccounts { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostoptimizationhubEnrollmentStatusConfig <a name="CostoptimizationhubEnrollmentStatusConfig" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CostoptimizationhubEnrollmentStatusConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object IncludeMemberAccounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/costoptimizationhub_enrollment_status#include_member_accounts CostoptimizationhubEnrollmentStatus#include_member_accounts}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IncludeMemberAccounts`<sup>Optional</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.costoptimizationhubEnrollmentStatus.CostoptimizationhubEnrollmentStatusConfig.property.includeMemberAccounts"></a>

```csharp
public object IncludeMemberAccounts { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/costoptimizationhub_enrollment_status#include_member_accounts CostoptimizationhubEnrollmentStatus#include_member_accounts}.

---



