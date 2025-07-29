# `mskconnectWorkerConfiguration` Submodule <a name="`mskconnectWorkerConfiguration` Submodule" id="@cdktf/provider-aws.mskconnectWorkerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectWorkerConfiguration <a name="MskconnectWorkerConfiguration" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration aws_mskconnect_worker_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectWorkerConfiguration(Construct Scope, string Id, MskconnectWorkerConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig">MskconnectWorkerConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig">MskconnectWorkerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(MskconnectWorkerConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts">MskconnectWorkerConfigurationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MskconnectWorkerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectWorkerConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectWorkerConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectWorkerConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectWorkerConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MskconnectWorkerConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskconnectWorkerConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskconnectWorkerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MskconnectWorkerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.latestRevision">LatestRevision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference">MskconnectWorkerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.propertiesFileContentInput">PropertiesFileContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.propertiesFileContent">PropertiesFileContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.latestRevision"></a>

```csharp
public double LatestRevision { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.timeouts"></a>

```csharp
public MskconnectWorkerConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference">MskconnectWorkerConfigurationTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesFileContentInput`<sup>Optional</sup> <a name="PropertiesFileContentInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.propertiesFileContentInput"></a>

```csharp
public string PropertiesFileContentInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PropertiesFileContent`<sup>Required</sup> <a name="PropertiesFileContent" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.propertiesFileContent"></a>

```csharp
public string PropertiesFileContent { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectWorkerConfigurationConfig <a name="MskconnectWorkerConfigurationConfig" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectWorkerConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PropertiesFileContent,
    string Description = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    MskconnectWorkerConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#name MskconnectWorkerConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.propertiesFileContent">PropertiesFileContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#properties_file_content MskconnectWorkerConfiguration#properties_file_content}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#description MskconnectWorkerConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#id MskconnectWorkerConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#tags MskconnectWorkerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#tags_all MskconnectWorkerConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts">MskconnectWorkerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#name MskconnectWorkerConfiguration#name}.

---

##### `PropertiesFileContent`<sup>Required</sup> <a name="PropertiesFileContent" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.propertiesFileContent"></a>

```csharp
public string PropertiesFileContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#properties_file_content MskconnectWorkerConfiguration#properties_file_content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#description MskconnectWorkerConfiguration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#id MskconnectWorkerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#region MskconnectWorkerConfiguration#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#tags MskconnectWorkerConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#tags_all MskconnectWorkerConfiguration#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationConfig.property.timeouts"></a>

```csharp
public MskconnectWorkerConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts">MskconnectWorkerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#timeouts MskconnectWorkerConfiguration#timeouts}

---

### MskconnectWorkerConfigurationTimeouts <a name="MskconnectWorkerConfigurationTimeouts" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectWorkerConfigurationTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#delete MskconnectWorkerConfiguration#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/mskconnect_worker_configuration#delete MskconnectWorkerConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectWorkerConfigurationTimeoutsOutputReference <a name="MskconnectWorkerConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectWorkerConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectWorkerConfiguration.MskconnectWorkerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



