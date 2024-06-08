# `apiGatewayDeployment` Submodule <a name="`apiGatewayDeployment` Submodule" id="@cdktf/provider-aws.apiGatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDeployment <a name="ApiGatewayDeployment" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDeployment(Construct Scope, string Id, ApiGatewayDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig">ApiGatewayDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig">ApiGatewayDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings">PutCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetCanarySettings">ResetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageDescription">ResetStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageName">ResetStageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetTriggers">ResetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCanarySettings` <a name="PutCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings"></a>

```csharp
private void PutCanarySettings(ApiGatewayDeploymentCanarySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---

##### `ResetCanarySettings` <a name="ResetCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetCanarySettings"></a>

```csharp
private void ResetCanarySettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStageDescription` <a name="ResetStageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageDescription"></a>

```csharp
private void ResetStageDescription()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageName"></a>

```csharp
private void ResetStageName()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetVariables"></a>

```csharp
private void ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference">ApiGatewayDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.invokeUrl">InvokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettingsInput">CanarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescriptionInput">StageDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescription">StageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CanarySettings`<sup>Required</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettings"></a>

```csharp
public ApiGatewayDeploymentCanarySettingsOutputReference CanarySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference">ApiGatewayDeploymentCanarySettingsOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `InvokeUrl`<sup>Required</sup> <a name="InvokeUrl" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.invokeUrl"></a>

```csharp
public string InvokeUrl { get; }
```

- *Type:* string

---

##### `CanarySettingsInput`<sup>Optional</sup> <a name="CanarySettingsInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettingsInput"></a>

```csharp
public ApiGatewayDeploymentCanarySettings CanarySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StageDescriptionInput`<sup>Optional</sup> <a name="StageDescriptionInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescriptionInput"></a>

```csharp
public string StageDescriptionInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageDescription`<sup>Required</sup> <a name="StageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescription"></a>

```csharp
public string StageDescription { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDeploymentCanarySettings <a name="ApiGatewayDeploymentCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDeploymentCanarySettings {
    double PercentTraffic = null,
    System.Collections.Generic.IDictionary<string, string> StageVariableOverrides = null,
    object UseStageCache = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.useStageCache">UseStageCache</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}. |

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.useStageCache"></a>

```csharp
public object UseStageCache { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}.

---

### ApiGatewayDeploymentConfig <a name="ApiGatewayDeploymentConfig" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RestApiId,
    ApiGatewayDeploymentCanarySettings CanarySettings = null,
    string Description = null,
    string Id = null,
    string StageDescription = null,
    string StageName = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null,
    System.Collections.Generic.IDictionary<string, string> Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageDescription">StageDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}.

---

##### `CanarySettings`<sup>Optional</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.canarySettings"></a>

```csharp
public ApiGatewayDeploymentCanarySettings CanarySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#canary_settings ApiGatewayDeployment#canary_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StageDescription`<sup>Optional</sup> <a name="StageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageDescription"></a>

```csharp
public string StageDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}.

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDeploymentCanarySettingsOutputReference <a name="ApiGatewayDeploymentCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDeploymentCanarySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```csharp
private void ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```csharp
private void ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```csharp
private void ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCache">UseStageCache</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```csharp
public double PercentTrafficInput { get; }
```

- *Type:* double

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```csharp
public object UseStageCacheInput { get; }
```

- *Type:* object

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```csharp
public object UseStageCache { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDeploymentCanarySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---



