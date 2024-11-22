# `datazoneEnvironment` Submodule <a name="`datazoneEnvironment` Submodule" id="@cdktf/provider-aws.datazoneEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironment <a name="DatazoneEnvironment" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment aws_datazone_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironment(Construct Scope, string Id, DatazoneEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putUserParameters">PutUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetAccountIdentifier">ResetAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetAccountRegion">ResetAccountRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetBlueprintIdentifier">ResetBlueprintIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetUserParameters">ResetUserParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(DatazoneEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts">DatazoneEnvironmentTimeouts</a>

---

##### `PutUserParameters` <a name="PutUserParameters" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putUserParameters"></a>

```csharp
private void PutUserParameters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.putUserParameters.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountIdentifier` <a name="ResetAccountIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetAccountIdentifier"></a>

```csharp
private void ResetAccountIdentifier()
```

##### `ResetAccountRegion` <a name="ResetAccountRegion" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetAccountRegion"></a>

```csharp
private void ResetAccountRegion()
```

##### `ResetBlueprintIdentifier` <a name="ResetBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetBlueprintIdentifier"></a>

```csharp
private void ResetBlueprintIdentifier()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms"></a>

```csharp
private void ResetGlossaryTerms()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserParameters` <a name="ResetUserParameters" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.resetUserParameters"></a>

```csharp
private void ResetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatazoneEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatazoneEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatazoneEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatazoneEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatazoneEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.lastDeployment">LastDeployment</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList">DatazoneEnvironmentLastDeploymentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.providerEnvironment">ProviderEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provisionedResources">ProvisionedResources</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList">DatazoneEnvironmentProvisionedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference">DatazoneEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.userParameters">UserParameters</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountRegionInput">AccountRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.blueprintIdentifierInput">BlueprintIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.profileIdentifierInput">ProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput">UserParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountRegion">AccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.blueprintIdentifier">BlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms">GlossaryTerms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.profileIdentifier">ProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastDeployment`<sup>Required</sup> <a name="LastDeployment" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.lastDeployment"></a>

```csharp
public DatazoneEnvironmentLastDeploymentList LastDeployment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList">DatazoneEnvironmentLastDeploymentList</a>

---

##### `ProviderEnvironment`<sup>Required</sup> <a name="ProviderEnvironment" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.providerEnvironment"></a>

```csharp
public string ProviderEnvironment { get; }
```

- *Type:* string

---

##### `ProvisionedResources`<sup>Required</sup> <a name="ProvisionedResources" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.provisionedResources"></a>

```csharp
public DatazoneEnvironmentProvisionedResourcesList ProvisionedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList">DatazoneEnvironmentProvisionedResourcesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.timeouts"></a>

```csharp
public DatazoneEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference">DatazoneEnvironmentTimeoutsOutputReference</a>

---

##### `UserParameters`<sup>Required</sup> <a name="UserParameters" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.userParameters"></a>

```csharp
public DatazoneEnvironmentUserParametersList UserParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a>

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountIdentifierInput"></a>

```csharp
public string AccountIdentifierInput { get; }
```

- *Type:* string

---

##### `AccountRegionInput`<sup>Optional</sup> <a name="AccountRegionInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountRegionInput"></a>

```csharp
public string AccountRegionInput { get; }
```

- *Type:* string

---

##### `BlueprintIdentifierInput`<sup>Optional</sup> <a name="BlueprintIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.blueprintIdentifierInput"></a>

```csharp
public string BlueprintIdentifierInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput"></a>

```csharp
public string[] GlossaryTermsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProfileIdentifierInput`<sup>Optional</sup> <a name="ProfileIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.profileIdentifierInput"></a>

```csharp
public string ProfileIdentifierInput { get; }
```

- *Type:* string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserParametersInput`<sup>Optional</sup> <a name="UserParametersInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput"></a>

```csharp
public object UserParametersInput { get; }
```

- *Type:* object

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; }
```

- *Type:* string

---

##### `AccountRegion`<sup>Required</sup> <a name="AccountRegion" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.accountRegion"></a>

```csharp
public string AccountRegion { get; }
```

- *Type:* string

---

##### `BlueprintIdentifier`<sup>Required</sup> <a name="BlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.blueprintIdentifier"></a>

```csharp
public string BlueprintIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms"></a>

```csharp
public string[] GlossaryTerms { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProfileIdentifier`<sup>Required</sup> <a name="ProfileIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.profileIdentifier"></a>

```csharp
public string ProfileIdentifier { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentConfig <a name="DatazoneEnvironmentConfig" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainIdentifier,
    string Name,
    string ProfileIdentifier,
    string ProjectIdentifier,
    string AccountIdentifier = null,
    string AccountRegion = null,
    string BlueprintIdentifier = null,
    string Description = null,
    string[] GlossaryTerms = null,
    DatazoneEnvironmentTimeouts Timeouts = null,
    object UserParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.profileIdentifier">ProfileIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#profile_identifier DatazoneEnvironment#profile_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#account_identifier DatazoneEnvironment#account_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.accountRegion">AccountRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#account_region DatazoneEnvironment#account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.blueprintIdentifier">BlueprintIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#blueprint_identifier DatazoneEnvironment#blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms">GlossaryTerms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts">DatazoneEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters">UserParameters</a></code> | <code>object</code> | user_parameters block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}.

---

##### `ProfileIdentifier`<sup>Required</sup> <a name="ProfileIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.profileIdentifier"></a>

```csharp
public string ProfileIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#profile_identifier DatazoneEnvironment#profile_identifier}.

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}.

---

##### `AccountIdentifier`<sup>Optional</sup> <a name="AccountIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#account_identifier DatazoneEnvironment#account_identifier}.

---

##### `AccountRegion`<sup>Optional</sup> <a name="AccountRegion" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.accountRegion"></a>

```csharp
public string AccountRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#account_region DatazoneEnvironment#account_region}.

---

##### `BlueprintIdentifier`<sup>Optional</sup> <a name="BlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.blueprintIdentifier"></a>

```csharp
public string BlueprintIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#blueprint_identifier DatazoneEnvironment#blueprint_identifier}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}.

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms"></a>

```csharp
public string[] GlossaryTerms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.timeouts"></a>

```csharp
public DatazoneEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts">DatazoneEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#timeouts DatazoneEnvironment#timeouts}

---

##### `UserParameters`<sup>Optional</sup> <a name="UserParameters" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters"></a>

```csharp
public object UserParameters { get; set; }
```

- *Type:* object

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

### DatazoneEnvironmentLastDeployment <a name="DatazoneEnvironmentLastDeployment" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeployment {

};
```


### DatazoneEnvironmentLastDeploymentFailureReasons <a name="DatazoneEnvironmentLastDeploymentFailureReasons" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasons"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasons.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeploymentFailureReasons {

};
```


### DatazoneEnvironmentProvisionedResources <a name="DatazoneEnvironmentProvisionedResources" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentProvisionedResources {

};
```


### DatazoneEnvironmentTimeouts <a name="DatazoneEnvironmentTimeouts" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#create DatazoneEnvironment#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#delete DatazoneEnvironment#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#update DatazoneEnvironment#update}

---

### DatazoneEnvironmentUserParameters <a name="DatazoneEnvironmentUserParameters" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentUserParameters {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentLastDeploymentFailureReasonsList <a name="DatazoneEnvironmentLastDeploymentFailureReasonsList" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeploymentFailureReasonsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.get"></a>

```csharp
private DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference <a name="DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasons">DatazoneEnvironmentLastDeploymentFailureReasons</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference.property.internalValue"></a>

```csharp
public DatazoneEnvironmentLastDeploymentFailureReasons InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasons">DatazoneEnvironmentLastDeploymentFailureReasons</a>

---


### DatazoneEnvironmentLastDeploymentList <a name="DatazoneEnvironmentLastDeploymentList" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeploymentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.get"></a>

```csharp
private DatazoneEnvironmentLastDeploymentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatazoneEnvironmentLastDeploymentOutputReference <a name="DatazoneEnvironmentLastDeploymentOutputReference" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentLastDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentStatus">DeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.failureReasons">FailureReasons</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList">DatazoneEnvironmentLastDeploymentFailureReasonsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.isDeploymentComplete">IsDeploymentComplete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.messages">Messages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeployment">DatazoneEnvironmentLastDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentStatus"></a>

```csharp
public string DeploymentStatus { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `FailureReasons`<sup>Required</sup> <a name="FailureReasons" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.failureReasons"></a>

```csharp
public DatazoneEnvironmentLastDeploymentFailureReasonsList FailureReasons { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentFailureReasonsList">DatazoneEnvironmentLastDeploymentFailureReasonsList</a>

---

##### `IsDeploymentComplete`<sup>Required</sup> <a name="IsDeploymentComplete" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.isDeploymentComplete"></a>

```csharp
public IResolvable IsDeploymentComplete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.messages"></a>

```csharp
public string[] Messages { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeploymentOutputReference.property.internalValue"></a>

```csharp
public DatazoneEnvironmentLastDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentLastDeployment">DatazoneEnvironmentLastDeployment</a>

---


### DatazoneEnvironmentProvisionedResourcesList <a name="DatazoneEnvironmentProvisionedResourcesList" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentProvisionedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.get"></a>

```csharp
private DatazoneEnvironmentProvisionedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatazoneEnvironmentProvisionedResourcesOutputReference <a name="DatazoneEnvironmentProvisionedResourcesOutputReference" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentProvisionedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResources">DatazoneEnvironmentProvisionedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResourcesOutputReference.property.internalValue"></a>

```csharp
public DatazoneEnvironmentProvisionedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentProvisionedResources">DatazoneEnvironmentProvisionedResources</a>

---


### DatazoneEnvironmentTimeoutsOutputReference <a name="DatazoneEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatazoneEnvironmentUserParametersList <a name="DatazoneEnvironmentUserParametersList" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentUserParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get"></a>

```csharp
private DatazoneEnvironmentUserParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatazoneEnvironmentUserParametersOutputReference <a name="DatazoneEnvironmentUserParametersOutputReference" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatazoneEnvironmentUserParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



