# `vpclatticeTargetGroupAttachment` Submodule <a name="`vpclatticeTargetGroupAttachment` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroupAttachment <a name="VpclatticeTargetGroupAttachment" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment aws_vpclattice_target_group_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachment(Construct Scope, string Id, VpclatticeTargetGroupAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig">VpclatticeTargetGroupAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig">VpclatticeTargetGroupAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget"></a>

```csharp
private void PutTarget(VpclatticeTargetGroupAttachmentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(VpclatticeTargetGroupAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeTargetGroupAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroupAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroupAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroupAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroupAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpclatticeTargetGroupAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeTargetGroupAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeTargetGroupAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeTargetGroupAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference">VpclatticeTargetGroupAttachmentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference">VpclatticeTargetGroupAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifierInput">TargetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.target"></a>

```csharp
public VpclatticeTargetGroupAttachmentTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference">VpclatticeTargetGroupAttachmentTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeouts"></a>

```csharp
public VpclatticeTargetGroupAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference">VpclatticeTargetGroupAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetGroupIdentifierInput`<sup>Optional</sup> <a name="TargetGroupIdentifierInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifierInput"></a>

```csharp
public string TargetGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetInput"></a>

```csharp
public VpclatticeTargetGroupAttachmentTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupAttachmentConfig <a name="VpclatticeTargetGroupAttachmentConfig" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    VpclatticeTargetGroupAttachmentTarget Target,
    string TargetGroupIdentifier,
    string Id = null,
    VpclatticeTargetGroupAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.target"></a>

```csharp
public VpclatticeTargetGroupAttachmentTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#target VpclatticeTargetGroupAttachment#target}

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.targetGroupIdentifier"></a>

```csharp
public string TargetGroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#target_group_identifier VpclatticeTargetGroupAttachment#target_group_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentConfig.property.timeouts"></a>

```csharp
public VpclatticeTargetGroupAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts">VpclatticeTargetGroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#timeouts VpclatticeTargetGroupAttachment#timeouts}

---

### VpclatticeTargetGroupAttachmentTarget <a name="VpclatticeTargetGroupAttachmentTarget" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachmentTarget {
    string Id,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#port VpclatticeTargetGroupAttachment#port}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#id VpclatticeTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#port VpclatticeTargetGroupAttachment#port}.

---

### VpclatticeTargetGroupAttachmentTimeouts <a name="VpclatticeTargetGroupAttachmentTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#create VpclatticeTargetGroupAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#delete VpclatticeTargetGroupAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#create VpclatticeTargetGroupAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpclattice_target_group_attachment#delete VpclatticeTargetGroupAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupAttachmentTargetOutputReference <a name="VpclatticeTargetGroupAttachmentTargetOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachmentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTargetOutputReference.property.internalValue"></a>

```csharp
public VpclatticeTargetGroupAttachmentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTarget">VpclatticeTargetGroupAttachmentTarget</a>

---


### VpclatticeTargetGroupAttachmentTimeoutsOutputReference <a name="VpclatticeTargetGroupAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroupAttachment.VpclatticeTargetGroupAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



