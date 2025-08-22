# `appautoscalingTarget` Submodule <a name="`appautoscalingTarget` Submodule" id="@cdktf/provider-aws.appautoscalingTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingTarget <a name="AppautoscalingTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target aws_appautoscaling_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppautoscalingTarget(Construct Scope, string Id, AppautoscalingTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig">AppautoscalingTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig">AppautoscalingTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState">PutSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetSuspendedState">ResetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSuspendedState` <a name="PutSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState"></a>

```csharp
private void PutSuspendedState(AppautoscalingTargetSuspendedState Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.putSuspendedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSuspendedState` <a name="ResetSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetSuspendedState"></a>

```csharp
private void ResetSuspendedState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppautoscalingTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppautoscalingTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppautoscalingTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppautoscalingTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppautoscalingTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppautoscalingTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppautoscalingTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference">AppautoscalingTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimensionInput">ScalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedStateInput">SuspendedStateInput</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `SuspendedState`<sup>Required</sup> <a name="SuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedState"></a>

```csharp
public AppautoscalingTargetSuspendedStateOutputReference SuspendedState { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference">AppautoscalingTargetSuspendedStateOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ScalableDimensionInput`<sup>Optional</sup> <a name="ScalableDimensionInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimensionInput"></a>

```csharp
public string ScalableDimensionInput { get; }
```

- *Type:* string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespaceInput"></a>

```csharp
public string ServiceNamespaceInput { get; }
```

- *Type:* string

---

##### `SuspendedStateInput`<sup>Optional</sup> <a name="SuspendedStateInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.suspendedStateInput"></a>

```csharp
public AppautoscalingTargetSuspendedState SuspendedStateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; }
```

- *Type:* string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingTargetConfig <a name="AppautoscalingTargetConfig" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppautoscalingTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double MaxCapacity,
    double MinCapacity,
    string ResourceId,
    string ScalableDimension,
    string ServiceNamespace,
    string Id = null,
    string Region = null,
    string RoleArn = null,
    AppautoscalingTargetSuspendedState SuspendedState = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.suspendedState">SuspendedState</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | suspended_state block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#tags AppautoscalingTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#max_capacity AppautoscalingTarget#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#min_capacity AppautoscalingTarget#min_capacity}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#resource_id AppautoscalingTarget#resource_id}.

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#scalable_dimension AppautoscalingTarget#scalable_dimension}.

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#service_namespace AppautoscalingTarget#service_namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#region AppautoscalingTarget#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#role_arn AppautoscalingTarget#role_arn}.

---

##### `SuspendedState`<sup>Optional</sup> <a name="SuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.suspendedState"></a>

```csharp
public AppautoscalingTargetSuspendedState SuspendedState { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

suspended_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#suspended_state AppautoscalingTarget#suspended_state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#tags AppautoscalingTarget#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}.

---

### AppautoscalingTargetSuspendedState <a name="AppautoscalingTargetSuspendedState" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppautoscalingTargetSuspendedState {
    object DynamicScalingInSuspended = null,
    object DynamicScalingOutSuspended = null,
    object ScheduledScalingSuspended = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}. |

---

##### `DynamicScalingInSuspended`<sup>Optional</sup> <a name="DynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingInSuspended"></a>

```csharp
public object DynamicScalingInSuspended { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}.

---

##### `DynamicScalingOutSuspended`<sup>Optional</sup> <a name="DynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.dynamicScalingOutSuspended"></a>

```csharp
public object DynamicScalingOutSuspended { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}.

---

##### `ScheduledScalingSuspended`<sup>Optional</sup> <a name="ScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState.property.scheduledScalingSuspended"></a>

```csharp
public object ScheduledScalingSuspended { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingTargetSuspendedStateOutputReference <a name="AppautoscalingTargetSuspendedStateOutputReference" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppautoscalingTargetSuspendedStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended">ResetDynamicScalingInSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended">ResetDynamicScalingOutSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetScheduledScalingSuspended">ResetScheduledScalingSuspended</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDynamicScalingInSuspended` <a name="ResetDynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended"></a>

```csharp
private void ResetDynamicScalingInSuspended()
```

##### `ResetDynamicScalingOutSuspended` <a name="ResetDynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended"></a>

```csharp
private void ResetDynamicScalingOutSuspended()
```

##### `ResetScheduledScalingSuspended` <a name="ResetScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.resetScheduledScalingSuspended"></a>

```csharp
private void ResetScheduledScalingSuspended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput">DynamicScalingInSuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput">DynamicScalingOutSuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput">ScheduledScalingSuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">DynamicScalingInSuspended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">DynamicScalingOutSuspended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">ScheduledScalingSuspended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicScalingInSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingInSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput"></a>

```csharp
public object DynamicScalingInSuspendedInput { get; }
```

- *Type:* object

---

##### `DynamicScalingOutSuspendedInput`<sup>Optional</sup> <a name="DynamicScalingOutSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput"></a>

```csharp
public object DynamicScalingOutSuspendedInput { get; }
```

- *Type:* object

---

##### `ScheduledScalingSuspendedInput`<sup>Optional</sup> <a name="ScheduledScalingSuspendedInput" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput"></a>

```csharp
public object ScheduledScalingSuspendedInput { get; }
```

- *Type:* object

---

##### `DynamicScalingInSuspended`<sup>Required</sup> <a name="DynamicScalingInSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```csharp
public object DynamicScalingInSuspended { get; }
```

- *Type:* object

---

##### `DynamicScalingOutSuspended`<sup>Required</sup> <a name="DynamicScalingOutSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```csharp
public object DynamicScalingOutSuspended { get; }
```

- *Type:* object

---

##### `ScheduledScalingSuspended`<sup>Required</sup> <a name="ScheduledScalingSuspended" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```csharp
public object ScheduledScalingSuspended { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedStateOutputReference.property.internalValue"></a>

```csharp
public AppautoscalingTargetSuspendedState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingTarget.AppautoscalingTargetSuspendedState">AppautoscalingTargetSuspendedState</a>

---



