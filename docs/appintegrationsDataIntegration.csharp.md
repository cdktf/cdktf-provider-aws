# `appintegrationsDataIntegration` Submodule <a name="`appintegrationsDataIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsDataIntegration <a name="AppintegrationsDataIntegration" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration aws_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsDataIntegration(Construct Scope, string Id, AppintegrationsDataIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig">AppintegrationsDataIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig">AppintegrationsDataIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig">PutScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleConfig` <a name="PutScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig"></a>

```csharp
private void PutScheduleConfig(AppintegrationsDataIntegrationScheduleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsDataIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsDataIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsDataIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppintegrationsDataIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppintegrationsDataIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput">ScheduleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput">SourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri">SourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig"></a>

```csharp
public AppintegrationsDataIntegrationScheduleConfigOutputReference ScheduleConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScheduleConfigInput`<sup>Optional</sup> <a name="ScheduleConfigInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput"></a>

```csharp
public AppintegrationsDataIntegrationScheduleConfig ScheduleConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `SourceUriInput`<sup>Optional</sup> <a name="SourceUriInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput"></a>

```csharp
public string SourceUriInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri"></a>

```csharp
public string SourceUri { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsDataIntegrationConfig <a name="AppintegrationsDataIntegrationConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsDataIntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KmsKey,
    string Name,
    AppintegrationsDataIntegrationScheduleConfig ScheduleConfig,
    string SourceUri,
    string Description = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | schedule_config block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri">SourceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}.

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig"></a>

```csharp
public AppintegrationsDataIntegrationScheduleConfig ScheduleConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri"></a>

```csharp
public string SourceUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#region AppintegrationsDataIntegration#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}.

---

### AppintegrationsDataIntegrationScheduleConfig <a name="AppintegrationsDataIntegrationScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsDataIntegrationScheduleConfig {
    string FirstExecutionFrom,
    string Object,
    string ScheduleExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}. |

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom"></a>

```csharp
public string FirstExecutionFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}.

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsDataIntegrationScheduleConfigOutputReference <a name="AppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppintegrationsDataIntegrationScheduleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput">FirstExecutionFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstExecutionFromInput`<sup>Optional</sup> <a name="FirstExecutionFromInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput"></a>

```csharp
public string FirstExecutionFromInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```csharp
public string FirstExecutionFrom { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```csharp
public AppintegrationsDataIntegrationScheduleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---



