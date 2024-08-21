# `vpclatticeTargetGroup` Submodule <a name="`vpclatticeTargetGroup` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroup <a name="VpclatticeTargetGroup" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group aws_vpclattice_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroup(Construct Scope, string Id, VpclatticeTargetGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig">VpclatticeTargetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig">VpclatticeTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig"></a>

```csharp
private void PutConfig(VpclatticeTargetGroupConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(VpclatticeTargetGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeTargetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeTargetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config"></a>

```csharp
public VpclatticeTargetGroupConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts"></a>

```csharp
public VpclatticeTargetGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput"></a>

```csharp
public VpclatticeTargetGroupConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupConfig <a name="VpclatticeTargetGroupConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    VpclatticeTargetGroupConfigA Config = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpclatticeTargetGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config"></a>

```csharp
public VpclatticeTargetGroupConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts"></a>

```csharp
public VpclatticeTargetGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

### VpclatticeTargetGroupConfigA <a name="VpclatticeTargetGroupConfigA" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigA {
    VpclatticeTargetGroupConfigHealthCheck HealthCheck = null,
    string IpAddressType = null,
    string LambdaEventStructureVersion = null,
    double Port = null,
    string Protocol = null,
    string ProtocolVersion = null,
    string VpcIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion">LambdaEventStructureVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}. |

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}.

---

##### `LambdaEventStructureVersion`<sup>Optional</sup> <a name="LambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion"></a>

```csharp
public string LambdaEventStructureVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `VpcIdentifier`<sup>Optional</sup> <a name="VpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}.

---

### VpclatticeTargetGroupConfigHealthCheck <a name="VpclatticeTargetGroupConfigHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigHealthCheck {
    object Enabled = null,
    double HealthCheckIntervalSeconds = null,
    double HealthCheckTimeoutSeconds = null,
    double HealthyThresholdCount = null,
    VpclatticeTargetGroupConfigHealthCheckMatcher Matcher = null,
    string Path = null,
    double Port = null,
    string Protocol = null,
    string ProtocolVersion = null,
    double UnhealthyThresholdCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds">HealthCheckTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher">Matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | matcher block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}.

---

##### `HealthCheckIntervalSeconds`<sup>Optional</sup> <a name="HealthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}.

---

##### `HealthCheckTimeoutSeconds`<sup>Optional</sup> <a name="HealthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds"></a>

```csharp
public double HealthCheckTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}.

---

##### `HealthyThresholdCount`<sup>Optional</sup> <a name="HealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount"></a>

```csharp
public double HealthyThresholdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheckMatcher Matcher { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `UnhealthyThresholdCount`<sup>Optional</sup> <a name="UnhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount"></a>

```csharp
public double UnhealthyThresholdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}.

---

### VpclatticeTargetGroupConfigHealthCheckMatcher <a name="VpclatticeTargetGroupConfigHealthCheckMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigHealthCheckMatcher {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}.

---

### VpclatticeTargetGroupTimeouts <a name="VpclatticeTargetGroupTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupConfigAOutputReference <a name="VpclatticeTargetGroupConfigAOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion">ResetLambdaEventStructureVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier">ResetVpcIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck"></a>

```csharp
private void PutHealthCheck(VpclatticeTargetGroupConfigHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetLambdaEventStructureVersion` <a name="ResetLambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion"></a>

```csharp
private void ResetLambdaEventStructureVersion()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion"></a>

```csharp
private void ResetProtocolVersion()
```

##### `ResetVpcIdentifier` <a name="ResetVpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier"></a>

```csharp
private void ResetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput">LambdaEventStructureVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion">LambdaEventStructureVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a>

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `LambdaEventStructureVersionInput`<sup>Optional</sup> <a name="LambdaEventStructureVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput"></a>

```csharp
public string LambdaEventStructureVersionInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput"></a>

```csharp
public string VpcIdentifierInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `LambdaEventStructureVersion`<sup>Required</sup> <a name="LambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion"></a>

```csharp
public string LambdaEventStructureVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue"></a>

```csharp
public VpclatticeTargetGroupConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---


### VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheckMatcher InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---


### VpclatticeTargetGroupConfigHealthCheckOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupConfigHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher">PutMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds">ResetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds">ResetHealthCheckTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount">ResetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount">ResetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatcher` <a name="PutMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher"></a>

```csharp
private void PutMatcher(VpclatticeTargetGroupConfigHealthCheckMatcher Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHealthCheckIntervalSeconds` <a name="ResetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds"></a>

```csharp
private void ResetHealthCheckIntervalSeconds()
```

##### `ResetHealthCheckTimeoutSeconds` <a name="ResetHealthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds"></a>

```csharp
private void ResetHealthCheckTimeoutSeconds()
```

##### `ResetHealthyThresholdCount` <a name="ResetHealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount"></a>

```csharp
private void ResetHealthyThresholdCount()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher"></a>

```csharp
private void ResetMatcher()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion"></a>

```csharp
private void ResetProtocolVersion()
```

##### `ResetUnhealthyThresholdCount` <a name="ResetUnhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount"></a>

```csharp
private void ResetUnhealthyThresholdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher">Matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput">HealthCheckIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput">HealthCheckTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput">HealthyThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput">MatcherInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput">UnhealthyThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds">HealthCheckTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference Matcher { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HealthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="HealthCheckIntervalSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput"></a>

```csharp
public double HealthCheckIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `HealthCheckTimeoutSecondsInput`<sup>Optional</sup> <a name="HealthCheckTimeoutSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput"></a>

```csharp
public double HealthCheckTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `HealthyThresholdCountInput`<sup>Optional</sup> <a name="HealthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput"></a>

```csharp
public double HealthyThresholdCountInput { get; }
```

- *Type:* double

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheckMatcher MatcherInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `UnhealthyThresholdCountInput`<sup>Optional</sup> <a name="UnhealthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput"></a>

```csharp
public double UnhealthyThresholdCountInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HealthCheckIntervalSeconds`<sup>Required</sup> <a name="HealthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; }
```

- *Type:* double

---

##### `HealthCheckTimeoutSeconds`<sup>Required</sup> <a name="HealthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds"></a>

```csharp
public double HealthCheckTimeoutSeconds { get; }
```

- *Type:* double

---

##### `HealthyThresholdCount`<sup>Required</sup> <a name="HealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount"></a>

```csharp
public double HealthyThresholdCount { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `UnhealthyThresholdCount`<sup>Required</sup> <a name="UnhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount"></a>

```csharp
public double UnhealthyThresholdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue"></a>

```csharp
public VpclatticeTargetGroupConfigHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---


### VpclatticeTargetGroupTimeoutsOutputReference <a name="VpclatticeTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeTargetGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



