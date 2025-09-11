# `workspaceswebUserAccessLoggingSettings` Submodule <a name="`workspaceswebUserAccessLoggingSettings` Submodule" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserAccessLoggingSettings <a name="WorkspaceswebUserAccessLoggingSettings" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings aws_workspacesweb_user_access_logging_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebUserAccessLoggingSettings(Construct Scope, string Id, WorkspaceswebUserAccessLoggingSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig">WorkspaceswebUserAccessLoggingSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig">WorkspaceswebUserAccessLoggingSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebUserAccessLoggingSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebUserAccessLoggingSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebUserAccessLoggingSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspaceswebUserAccessLoggingSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebUserAccessLoggingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput">KinesisStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn">KinesisStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn"></a>

```csharp
public string UserAccessLoggingSettingsArn { get; }
```

- *Type:* string

---

##### `KinesisStreamArnInput`<sup>Optional</sup> <a name="KinesisStreamArnInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput"></a>

```csharp
public string KinesisStreamArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KinesisStreamArn`<sup>Required</sup> <a name="KinesisStreamArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn"></a>

```csharp
public string KinesisStreamArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserAccessLoggingSettingsConfig <a name="WorkspaceswebUserAccessLoggingSettingsConfig" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspaceswebUserAccessLoggingSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KinesisStreamArn,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn">KinesisStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KinesisStreamArn`<sup>Required</sup> <a name="KinesisStreamArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn"></a>

```csharp
public string KinesisStreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#region WorkspaceswebUserAccessLoggingSettings#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}.

---



