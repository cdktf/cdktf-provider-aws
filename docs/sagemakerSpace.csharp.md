# `sagemakerSpace` Submodule <a name="`sagemakerSpace` Submodule" id="@cdktf/provider-aws.sagemakerSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerSpace <a name="SagemakerSpace" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space aws_sagemaker_space}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpace(Construct Scope, string Id, SagemakerSpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig">SagemakerSpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig">SagemakerSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings">PutOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings">PutSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings">PutSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOwnershipSettings">ResetOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName">ResetSpaceDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSettings">ResetSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings">ResetSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOwnershipSettings` <a name="PutOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings"></a>

```csharp
private void PutOwnershipSettings(SagemakerSpaceOwnershipSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `PutSpaceSettings` <a name="PutSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings"></a>

```csharp
private void PutSpaceSettings(SagemakerSpaceSpaceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `PutSpaceSharingSettings` <a name="PutSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings"></a>

```csharp
private void PutSpaceSharingSettings(SagemakerSpaceSpaceSharingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwnershipSettings` <a name="ResetOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOwnershipSettings"></a>

```csharp
private void ResetOwnershipSettings()
```

##### `ResetSpaceDisplayName` <a name="ResetSpaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName"></a>

```csharp
private void ResetSpaceDisplayName()
```

##### `ResetSpaceSettings` <a name="ResetSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSettings"></a>

```csharp
private void ResetSpaceSettings()
```

##### `ResetSpaceSharingSettings` <a name="ResetSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings"></a>

```csharp
private void ResetSpaceSharingSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerSpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerSpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerSpace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerSpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerSpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.homeEfsFileSystemUid">HomeEfsFileSystemUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettings">OwnershipSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettings">SpaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings">SpaceSharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput">OwnershipSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput">SpaceDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceNameInput">SpaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput">SpaceSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput">SpaceSharingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayName">SpaceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceName">SpaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HomeEfsFileSystemUid`<sup>Required</sup> <a name="HomeEfsFileSystemUid" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.homeEfsFileSystemUid"></a>

```csharp
public string HomeEfsFileSystemUid { get; }
```

- *Type:* string

---

##### `OwnershipSettings`<sup>Required</sup> <a name="OwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettings"></a>

```csharp
public SagemakerSpaceOwnershipSettingsOutputReference OwnershipSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a>

---

##### `SpaceSettings`<sup>Required</sup> <a name="SpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsOutputReference SpaceSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a>

---

##### `SpaceSharingSettings`<sup>Required</sup> <a name="SpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings"></a>

```csharp
public SagemakerSpaceSpaceSharingSettingsOutputReference SpaceSharingSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnershipSettingsInput`<sup>Optional</sup> <a name="OwnershipSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput"></a>

```csharp
public SagemakerSpaceOwnershipSettings OwnershipSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `SpaceDisplayNameInput`<sup>Optional</sup> <a name="SpaceDisplayNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput"></a>

```csharp
public string SpaceDisplayNameInput { get; }
```

- *Type:* string

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceNameInput"></a>

```csharp
public string SpaceNameInput { get; }
```

- *Type:* string

---

##### `SpaceSettingsInput`<sup>Optional</sup> <a name="SpaceSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettings SpaceSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `SpaceSharingSettingsInput`<sup>Optional</sup> <a name="SpaceSharingSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSharingSettings SpaceSharingSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SpaceDisplayName`<sup>Required</sup> <a name="SpaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayName"></a>

```csharp
public string SpaceDisplayName { get; }
```

- *Type:* string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceName"></a>

```csharp
public string SpaceName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerSpaceConfig <a name="SagemakerSpaceConfig" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainId,
    string SpaceName,
    string Id = null,
    SagemakerSpaceOwnershipSettings OwnershipSettings = null,
    string SpaceDisplayName = null,
    SagemakerSpaceSpaceSettings SpaceSettings = null,
    SagemakerSpaceSpaceSharingSettings SpaceSharingSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceName">SpaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#id SagemakerSpace#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings">OwnershipSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | ownership_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName">SpaceDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings">SpaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings">SpaceSharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | space_sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}.

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceName"></a>

```csharp
public string SpaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#id SagemakerSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnershipSettings`<sup>Optional</sup> <a name="OwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings"></a>

```csharp
public SagemakerSpaceOwnershipSettings OwnershipSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

ownership_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}

---

##### `SpaceDisplayName`<sup>Optional</sup> <a name="SpaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName"></a>

```csharp
public string SpaceDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `SpaceSettings`<sup>Optional</sup> <a name="SpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings"></a>

```csharp
public SagemakerSpaceSpaceSettings SpaceSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

space_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `SpaceSharingSettings`<sup>Optional</sup> <a name="SpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings"></a>

```csharp
public SagemakerSpaceSpaceSharingSettings SpaceSharingSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

space_sharing_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}.

---

### SagemakerSpaceOwnershipSettings <a name="SagemakerSpaceOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceOwnershipSettings {
    string OwnerUserProfileName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName">OwnerUserProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}. |

---

##### `OwnerUserProfileName`<sup>Required</sup> <a name="OwnerUserProfileName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName"></a>

```csharp
public string OwnerUserProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}.

---

### SagemakerSpaceSpaceSettings <a name="SagemakerSpaceSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettings {
    string AppType = null,
    SagemakerSpaceSpaceSettingsCodeEditorAppSettings CodeEditorAppSettings = null,
    object CustomFileSystem = null,
    SagemakerSpaceSpaceSettingsJupyterLabAppSettings JupyterLabAppSettings = null,
    SagemakerSpaceSpaceSettingsJupyterServerAppSettings JupyterServerAppSettings = null,
    SagemakerSpaceSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettings = null,
    SagemakerSpaceSpaceSettingsSpaceStorageSettings SpaceStorageSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType">AppType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings">CodeEditorAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | code_editor_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystem">CustomFileSystem</a></code> | <code>object</code> | custom_file_system block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings">JupyterLabAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | jupyter_lab_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings">SpaceStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | space_storage_settings block. |

---

##### `AppType`<sup>Optional</sup> <a name="AppType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType"></a>

```csharp
public string AppType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}.

---

##### `CodeEditorAppSettings`<sup>Optional</sup> <a name="CodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings CodeEditorAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

code_editor_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}

---

##### `CustomFileSystem`<sup>Optional</sup> <a name="CustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystem"></a>

```csharp
public object CustomFileSystem { get; set; }
```

- *Type:* object

custom_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#custom_file_system SagemakerSpace#custom_file_system}

---

##### `JupyterLabAppSettings`<sup>Optional</sup> <a name="JupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings JupyterLabAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

jupyter_lab_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}

---

##### `JupyterServerAppSettings`<sup>Optional</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings JupyterServerAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}

---

##### `KernelGatewayAppSettings`<sup>Optional</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}

---

##### `SpaceStorageSettings`<sup>Optional</sup> <a name="SpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettings SpaceStorageSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

space_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettings {
    SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec DefaultResourceSpec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionAlias = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `SagemakerImageVersionAlias`<sup>Optional</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCustomFileSystem {
    SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem EfsFileSystem
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.property.efsFileSystem">EfsFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | efs_file_system block. |

---

##### `EfsFileSystem`<sup>Required</sup> <a name="EfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.property.efsFileSystem"></a>

```csharp
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem EfsFileSystem { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

efs_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}

---

### SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem {
    string FileSystemId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettings {
    SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec DefaultResourceSpec,
    object CodeRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepository">CodeRepository</a></code> | <code>object</code> | code_repository block. |

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepository"></a>

```csharp
public object CodeRepository { get; set; }
```

- *Type:* object

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository {
    string RepositoryUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionAlias = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `SagemakerImageVersionAlias`<sup>Optional</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettings {
    SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec,
    object CodeRepository = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.codeRepository">CodeRepository</a></code> | <code>object</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}. |

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.codeRepository"></a>

```csharp
public object CodeRepository { get; set; }
```

- *Type:* object

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository {
    string RepositoryUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionAlias = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `SagemakerImageVersionAlias`<sup>Optional</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettings <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettings {
    SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec,
    object CustomImage = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImage">CustomImage</a></code> | <code>object</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}. |

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImage"></a>

```csharp
public object CustomImage { get; set; }
```

- *Type:* object

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#custom_image SagemakerSpace#custom_image}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage {
    string AppImageConfigName,
    string ImageName,
    double ImageVersionNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}. |

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}.

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionAlias = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `SagemakerImageVersionAlias`<sup>Optional</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsSpaceStorageSettings {
    SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings EbsStorageSettings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings">EbsStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | ebs_storage_settings block. |

---

##### `EbsStorageSettings`<sup>Required</sup> <a name="EbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings EbsStorageSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

ebs_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
    double EbsVolumeSizeInGb
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb">EbsVolumeSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}. |

---

##### `EbsVolumeSizeInGb`<sup>Required</sup> <a name="EbsVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb"></a>

```csharp
public double EbsVolumeSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}.

---

### SagemakerSpaceSpaceSharingSettings <a name="SagemakerSpaceSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSharingSettings {
    string SharingType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType">SharingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}. |

---

##### `SharingType`<sup>Required</sup> <a name="SharingType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType"></a>

```csharp
public string SharingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerSpaceOwnershipSettingsOutputReference <a name="SagemakerSpaceOwnershipSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceOwnershipSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput">OwnerUserProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName">OwnerUserProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerUserProfileNameInput`<sup>Optional</sup> <a name="OwnerUserProfileNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput"></a>

```csharp
public string OwnerUserProfileNameInput { get; }
```

- *Type:* string

---

##### `OwnerUserProfileName`<sup>Required</sup> <a name="OwnerUserProfileName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName"></a>

```csharp
public string OwnerUserProfileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceOwnershipSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">ResetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionAlias` <a name="ResetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```csharp
private void ResetSagemakerImageVersionAlias()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">SagemakerImageVersionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="SagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```csharp
public string SagemakerImageVersionAliasInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAlias`<sup>Required</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemList <a name="SagemakerSpaceSpaceSettingsCustomFileSystemList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCustomFileSystemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get"></a>

```csharp
private SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem">PutEfsFileSystem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileSystem` <a name="PutEfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem"></a>

```csharp
private void PutEfsFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystem">EfsFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystemInput">EfsFileSystemInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsFileSystem`<sup>Required</sup> <a name="EfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystem"></a>

```csharp
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference EfsFileSystem { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference</a>

---

##### `EfsFileSystemInput`<sup>Optional</sup> <a name="EfsFileSystemInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystemInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem EfsFileSystemInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get"></a>

```csharp
private SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">ResetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionAlias` <a name="ResetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```csharp
private void ResetSagemakerImageVersionAlias()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">SagemakerImageVersionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="SagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```csharp
public string SagemakerImageVersionAliasInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAlias`<sup>Required</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository"></a>

```csharp
private void PutCodeRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository"></a>

```csharp
private void ResetCodeRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepository"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList CodeRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput"></a>

```csharp
public object CodeRepositoryInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```csharp
private SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">ResetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionAlias` <a name="ResetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```csharp
private void ResetSagemakerImageVersionAlias()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">SagemakerImageVersionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="SagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```csharp
public string SagemakerImageVersionAliasInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAlias`<sup>Required</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```csharp
private void PutCodeRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```csharp
private void ResetCodeRepository()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList CodeRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```csharp
public object CodeRepositoryInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```csharp
private SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```csharp
private void ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```csharp
public string AppImageConfigNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```csharp
public double ImageVersionNumberInput { get; }
```

- *Type:* double

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">ResetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionAlias` <a name="ResetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```csharp
private void ResetSagemakerImageVersionAlias()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">SagemakerImageVersionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">SagemakerImageVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="SagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```csharp
public string SagemakerImageVersionAliasInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionAlias`<sup>Required</sup> <a name="SagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```csharp
public string SagemakerImageVersionAlias { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```csharp
private void PutCustomImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```csharp
public object CustomImageInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerSpaceSpaceSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings">PutCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem">PutCustomFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings">PutJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings">PutJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings">PutKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings">PutSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType">ResetAppType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings">ResetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystem">ResetCustomFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings">ResetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings">ResetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings">ResetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings">ResetSpaceStorageSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeEditorAppSettings` <a name="PutCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings"></a>

```csharp
private void PutCodeEditorAppSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `PutCustomFileSystem` <a name="PutCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem"></a>

```csharp
private void PutCustomFileSystem(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem.parameter.value"></a>

- *Type:* object

---

##### `PutJupyterLabAppSettings` <a name="PutJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings"></a>

```csharp
private void PutJupyterLabAppSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `PutJupyterServerAppSettings` <a name="PutJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```csharp
private void PutJupyterServerAppSettings(SagemakerSpaceSpaceSettingsJupyterServerAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `PutKernelGatewayAppSettings` <a name="PutKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```csharp
private void PutKernelGatewayAppSettings(SagemakerSpaceSpaceSettingsKernelGatewayAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `PutSpaceStorageSettings` <a name="PutSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings"></a>

```csharp
private void PutSpaceStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `ResetAppType` <a name="ResetAppType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType"></a>

```csharp
private void ResetAppType()
```

##### `ResetCodeEditorAppSettings` <a name="ResetCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings"></a>

```csharp
private void ResetCodeEditorAppSettings()
```

##### `ResetCustomFileSystem` <a name="ResetCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystem"></a>

```csharp
private void ResetCustomFileSystem()
```

##### `ResetJupyterLabAppSettings` <a name="ResetJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings"></a>

```csharp
private void ResetJupyterLabAppSettings()
```

##### `ResetJupyterServerAppSettings` <a name="ResetJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```csharp
private void ResetJupyterServerAppSettings()
```

##### `ResetKernelGatewayAppSettings` <a name="ResetKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```csharp
private void ResetKernelGatewayAppSettings()
```

##### `ResetSpaceStorageSettings` <a name="ResetSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings"></a>

```csharp
private void ResetSpaceStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings">CodeEditorAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystem">CustomFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList">SagemakerSpaceSpaceSettingsCustomFileSystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings">JupyterLabAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings">SpaceStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput">AppTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput">CodeEditorAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemInput">CustomFileSystemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput">JupyterLabAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">JupyterServerAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">KernelGatewayAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput">SpaceStorageSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType">AppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeEditorAppSettings`<sup>Required</sup> <a name="CodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference CodeEditorAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `CustomFileSystem`<sup>Required</sup> <a name="CustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystem"></a>

```csharp
public SagemakerSpaceSpaceSettingsCustomFileSystemList CustomFileSystem { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList">SagemakerSpaceSpaceSettingsCustomFileSystemList</a>

---

##### `JupyterLabAppSettings`<sup>Required</sup> <a name="JupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference JupyterLabAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `JupyterServerAppSettings`<sup>Required</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference JupyterServerAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `KernelGatewayAppSettings`<sup>Required</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference KernelGatewayAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `SpaceStorageSettings`<sup>Required</sup> <a name="SpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference SpaceStorageSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a>

---

##### `AppTypeInput`<sup>Optional</sup> <a name="AppTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput"></a>

```csharp
public string AppTypeInput { get; }
```

- *Type:* string

---

##### `CodeEditorAppSettingsInput`<sup>Optional</sup> <a name="CodeEditorAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings CodeEditorAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `CustomFileSystemInput`<sup>Optional</sup> <a name="CustomFileSystemInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemInput"></a>

```csharp
public object CustomFileSystemInput { get; }
```

- *Type:* object

---

##### `JupyterLabAppSettingsInput`<sup>Optional</sup> <a name="JupyterLabAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings JupyterLabAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `JupyterServerAppSettingsInput`<sup>Optional</sup> <a name="JupyterServerAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings JupyterServerAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `KernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="KernelGatewayAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `SpaceStorageSettingsInput`<sup>Optional</sup> <a name="SpaceStorageSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettings SpaceStorageSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `AppType`<sup>Required</sup> <a name="AppType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType"></a>

```csharp
public string AppType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput">EbsVolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb">EbsVolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="EbsVolumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput"></a>

```csharp
public double EbsVolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `EbsVolumeSizeInGb`<sup>Required</sup> <a name="EbsVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb"></a>

```csharp
public double EbsVolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings">PutEbsStorageSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsStorageSettings` <a name="PutEbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings"></a>

```csharp
private void PutEbsStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings">EbsStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput">EbsStorageSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsStorageSettings`<sup>Required</sup> <a name="EbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference EbsStorageSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a>

---

##### `EbsStorageSettingsInput`<sup>Optional</sup> <a name="EbsStorageSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings EbsStorageSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSettingsSpaceStorageSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---


### SagemakerSpaceSpaceSharingSettingsOutputReference <a name="SagemakerSpaceSpaceSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerSpaceSpaceSharingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput">SharingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType">SharingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SharingTypeInput`<sup>Optional</sup> <a name="SharingTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput"></a>

```csharp
public string SharingTypeInput { get; }
```

- *Type:* string

---

##### `SharingType`<sup>Required</sup> <a name="SharingType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType"></a>

```csharp
public string SharingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerSpaceSpaceSharingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---



