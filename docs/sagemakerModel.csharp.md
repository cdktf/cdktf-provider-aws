# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktf/provider-aws.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model aws_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModel(Construct Scope, string Id, SagemakerModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">PutInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer">PutPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">ResetInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer">ResetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer"></a>

```csharp
private void PutContainer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putContainer.parameter.value"></a>

- *Type:* object

---

##### `PutInferenceExecutionConfig` <a name="PutInferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```csharp
private void PutInferenceExecutionConfig(SagemakerModelInferenceExecutionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `PutPrimaryContainer` <a name="PutPrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```csharp
private void PutPrimaryContainer(SagemakerModelPrimaryContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```csharp
private void PutVpcConfig(SagemakerModelVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```csharp
private void ResetEnableNetworkIsolation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInferenceExecutionConfig` <a name="ResetInferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```csharp
private void ResetInferenceExecutionConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrimaryContainer` <a name="ResetPrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```csharp
private void ResetPrimaryContainer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.container">Container</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.containerInput">ContainerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">InferenceExecutionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput">PrimaryContainerInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.container"></a>

```csharp
public SagemakerModelContainerList Container { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a>

---

##### `InferenceExecutionConfig`<sup>Required</sup> <a name="InferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```csharp
public SagemakerModelInferenceExecutionConfigOutputReference InferenceExecutionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```csharp
public SagemakerModelPrimaryContainerOutputReference PrimaryContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```csharp
public SagemakerModelVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.containerInput"></a>

```csharp
public object ContainerInput { get; }
```

- *Type:* object

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```csharp
public object EnableNetworkIsolationInput { get; }
```

- *Type:* object

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InferenceExecutionConfigInput`<sup>Optional</sup> <a name="InferenceExecutionConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```csharp
public SagemakerModelInferenceExecutionConfig InferenceExecutionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryContainerInput`<sup>Optional</sup> <a name="PrimaryContainerInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```csharp
public SagemakerModelPrimaryContainer PrimaryContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```csharp
public SagemakerModelVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```csharp
public object EnableNetworkIsolation { get; }
```

- *Type:* object

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExecutionRoleArn,
    object Container = null,
    object EnableNetworkIsolation = null,
    string Id = null,
    SagemakerModelInferenceExecutionConfig InferenceExecutionConfig = null,
    string Name = null,
    SagemakerModelPrimaryContainer PrimaryContainer = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SagemakerModelVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.container">Container</a></code> | <code>object</code> | container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#id SagemakerModel#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | inference_execution_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#name SagemakerModel#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.container"></a>

```csharp
public object Container { get; set; }
```

- *Type:* object

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#container SagemakerModel#container}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```csharp
public object EnableNetworkIsolation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#id SagemakerModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceExecutionConfig`<sup>Optional</sup> <a name="InferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```csharp
public SagemakerModelInferenceExecutionConfig InferenceExecutionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

inference_execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#name SagemakerModel#name}.

---

##### `PrimaryContainer`<sup>Optional</sup> <a name="PrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```csharp
public SagemakerModelPrimaryContainer PrimaryContainer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#region SagemakerModel#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```csharp
public SagemakerModelVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainer <a name="SagemakerModelContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainer {
    string ContainerHostname = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    string Image = null,
    SagemakerModelContainerImageConfig ImageConfig = null,
    string InferenceSpecificationName = null,
    string Mode = null,
    SagemakerModelContainerModelDataSource ModelDataSource = null,
    string ModelDataUrl = null,
    string ModelPackageName = null,
    SagemakerModelContainerMultiModelConfig MultiModelConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname">ContainerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | model_data_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl">ModelDataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelPackageName">ModelPackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | multi_model_config block. |

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.containerHostname"></a>

```csharp
public string ContainerHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.imageConfig"></a>

```csharp
public SagemakerModelContainerImageConfig ImageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.inferenceSpecificationName"></a>

```csharp
public string InferenceSpecificationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataSource"></a>

```csharp
public SagemakerModelContainerModelDataSource ModelDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelDataUrl"></a>

```csharp
public string ModelDataUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.modelPackageName"></a>

```csharp
public string ModelPackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}.

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainer.property.multiModelConfig"></a>

```csharp
public SagemakerModelContainerMultiModelConfig MultiModelConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

multi_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelContainerImageConfig <a name="SagemakerModelContainerImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerImageConfig {
    string RepositoryAccessMode,
    SagemakerModelContainerImageConfigRepositoryAuthConfig RepositoryAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode"></a>

```csharp
public string RepositoryAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAuthConfig"></a>

```csharp
public SagemakerModelContainerImageConfigRepositoryAuthConfig RepositoryAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelContainerImageConfigRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerImageConfigRepositoryAuthConfig {
    string RepositoryCredentialsProviderArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```csharp
public string RepositoryCredentialsProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelContainerModelDataSource <a name="SagemakerModelContainerModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSource {
    object S3DataSource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>object</code> | s3_data_source block. |

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource.property.s3DataSource"></a>

```csharp
public object S3DataSource { get; set; }
```

- *Type:* object

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelContainerModelDataSourceS3DataSource <a name="SagemakerModelContainerModelDataSourceS3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceS3DataSource {
    string CompressionType,
    string S3DataType,
    string S3Uri,
    SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```csharp
public string S3DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```csharp
public SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig {
    object AcceptEula
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```csharp
public object AcceptEula { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelContainerMultiModelConfig <a name="SagemakerModelContainerMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerMultiModelConfig {
    string ModelCacheSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig.property.modelCacheSetting"></a>

```csharp
public string ModelCacheSetting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}.

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelInferenceExecutionConfig {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainer {
    string ContainerHostname = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    string Image = null,
    SagemakerModelPrimaryContainerImageConfig ImageConfig = null,
    string InferenceSpecificationName = null,
    string Mode = null,
    SagemakerModelPrimaryContainerModelDataSource ModelDataSource = null,
    string ModelDataUrl = null,
    string ModelPackageName = null,
    SagemakerModelPrimaryContainerMultiModelConfig MultiModelConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">ContainerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | model_data_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">ModelDataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName">ModelPackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | multi_model_config block. |

---

##### `ContainerHostname`<sup>Optional</sup> <a name="ContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```csharp
public string ContainerHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `ImageConfig`<sup>Optional</sup> <a name="ImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfig ImageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `InferenceSpecificationName`<sup>Optional</sup> <a name="InferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName"></a>

```csharp
public string InferenceSpecificationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `ModelDataSource`<sup>Optional</sup> <a name="ModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSource ModelDataSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

model_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `ModelDataUrl`<sup>Optional</sup> <a name="ModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```csharp
public string ModelDataUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

##### `ModelPackageName`<sup>Optional</sup> <a name="ModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName"></a>

```csharp
public string ModelPackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}.

---

##### `MultiModelConfig`<sup>Optional</sup> <a name="MultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig"></a>

```csharp
public SagemakerModelPrimaryContainerMultiModelConfig MultiModelConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

multi_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerImageConfig {
    string RepositoryAccessMode,
    SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig RepositoryAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | repository_auth_config block. |

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```csharp
public string RepositoryAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

##### `RepositoryAuthConfig`<sup>Optional</sup> <a name="RepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig RepositoryAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

repository_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {
    string RepositoryCredentialsProviderArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}. |

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```csharp
public string RepositoryCredentialsProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}.

---

### SagemakerModelPrimaryContainerModelDataSource <a name="SagemakerModelPrimaryContainerModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSource {
    object S3DataSource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource">S3DataSource</a></code> | <code>object</code> | s3_data_source block. |

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource"></a>

```csharp
public object S3DataSource { get; set; }
```

- *Type:* object

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceS3DataSource {
    string CompressionType,
    string S3DataType,
    string S3Uri,
    SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType">S3DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | model_access_config block. |

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}.

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```csharp
public string S3DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}.

---

##### `ModelAccessConfig`<sup>Optional</sup> <a name="ModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

model_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
    object AcceptEula
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">AcceptEula</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}. |

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```csharp
public object AcceptEula { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}.

---

### SagemakerModelPrimaryContainerMultiModelConfig <a name="SagemakerModelPrimaryContainerMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerMultiModelConfig {
    string ModelCacheSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}. |

---

##### `ModelCacheSetting`<sup>Optional</sup> <a name="ModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting"></a>

```csharp
public string ModelCacheSetting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}.

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelVpcConfig {
    string[] SecurityGroupIds,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainerImageConfigOutputReference <a name="SagemakerModelContainerImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```csharp
private void PutRepositoryAuthConfig(SagemakerModelContainerImageConfigRepositoryAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```csharp
private void ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```csharp
public SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference RepositoryAuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```csharp
public string RepositoryAccessModeInput { get; }
```

- *Type:* string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```csharp
public SagemakerModelContainerImageConfigRepositoryAuthConfig RepositoryAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```csharp
public string RepositoryAccessMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelContainerImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---


### SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```csharp
public string RepositoryCredentialsProviderArnInput { get; }
```

- *Type:* string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```csharp
public string RepositoryCredentialsProviderArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelContainerImageConfigRepositoryAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigRepositoryAuthConfig">SagemakerModelContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelContainerList <a name="SagemakerModelContainerList" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get"></a>

```csharp
private SagemakerModelContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelContainerModelDataSourceOutputReference <a name="SagemakerModelContainerModelDataSourceOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource"></a>

```csharp
private void PutS3DataSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList">SagemakerModelContainerModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```csharp
public SagemakerModelContainerModelDataSourceS3DataSourceList S3DataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList">SagemakerModelContainerModelDataSourceS3DataSourceList</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```csharp
public object S3DataSourceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelContainerModelDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---


### SagemakerModelContainerModelDataSourceS3DataSourceList <a name="SagemakerModelContainerModelDataSourceS3DataSourceList" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceS3DataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get"></a>

```csharp
private SagemakerModelContainerModelDataSourceS3DataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```csharp
public object AcceptEulaInput { get; }
```

- *Type:* object

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```csharp
public object AcceptEula { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelContainerModelDataSourceS3DataSourceOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerModelDataSourceS3DataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```csharp
private void PutModelAccessConfig(SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```csharp
private void ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```csharp
public SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference ModelAccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```csharp
public SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```csharp
public string S3DataTypeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```csharp
public string S3DataType { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelContainerMultiModelConfigOutputReference <a name="SagemakerModelContainerMultiModelConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerMultiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```csharp
private void ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```csharp
public string ModelCacheSettingInput { get; }
```

- *Type:* string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```csharp
public string ModelCacheSetting { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelContainerMultiModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---


### SagemakerModelContainerOutputReference <a name="SagemakerModelContainerOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig"></a>

```csharp
private void PutImageConfig(SagemakerModelContainerImageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource"></a>

```csharp
private void PutModelDataSource(SagemakerModelContainerModelDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig"></a>

```csharp
private void PutMultiModelConfig(SagemakerModelContainerMultiModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname"></a>

```csharp
private void ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig"></a>

```csharp
private void ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetInferenceSpecificationName"></a>

```csharp
private void ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataSource"></a>

```csharp
private void ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl"></a>

```csharp
private void ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetModelPackageName"></a>

```csharp
private void ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.resetMultiModelConfig"></a>

```csharp
private void ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference">SagemakerModelContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference">SagemakerModelContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig"></a>

```csharp
public SagemakerModelContainerImageConfigOutputReference ImageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSource"></a>

```csharp
public SagemakerModelContainerModelDataSourceOutputReference ModelDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSourceOutputReference">SagemakerModelContainerModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfig"></a>

```csharp
public SagemakerModelContainerMultiModelConfigOutputReference MultiModelConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfigOutputReference">SagemakerModelContainerMultiModelConfigOutputReference</a>

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput"></a>

```csharp
public string ContainerHostnameInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput"></a>

```csharp
public SagemakerModelContainerImageConfig ImageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```csharp
public string InferenceSpecificationNameInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataSourceInput"></a>

```csharp
public SagemakerModelContainerModelDataSource ModelDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerModelDataSource">SagemakerModelContainerModelDataSource</a>

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput"></a>

```csharp
public string ModelDataUrlInput { get; }
```

- *Type:* string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageNameInput"></a>

```csharp
public string ModelPackageNameInput { get; }
```

- *Type:* string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.multiModelConfigInput"></a>

```csharp
public SagemakerModelContainerMultiModelConfig MultiModelConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerMultiModelConfig">SagemakerModelContainerMultiModelConfig</a>

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname"></a>

```csharp
public string ContainerHostname { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.inferenceSpecificationName"></a>

```csharp
public string InferenceSpecificationName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl"></a>

```csharp
public string ModelDataUrl { get; }
```

- *Type:* string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.modelPackageName"></a>

```csharp
public string ModelPackageName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelInferenceExecutionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelInferenceExecutionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig">PutRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig">ResetRepositoryAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryAuthConfig` <a name="PutRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```csharp
private void PutRepositoryAuthConfig(SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `ResetRepositoryAuthConfig` <a name="ResetRepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```csharp
private void ResetRepositoryAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">RepositoryAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput">RepositoryAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference RepositoryAuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `RepositoryAccessModeInput`<sup>Optional</sup> <a name="RepositoryAccessModeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```csharp
public string RepositoryAccessModeInput { get; }
```

- *Type:* string

---

##### `RepositoryAuthConfigInput`<sup>Optional</sup> <a name="RepositoryAuthConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig RepositoryAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```csharp
public string RepositoryAccessMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">RepositoryCredentialsProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryCredentialsProviderArnInput`<sup>Optional</sup> <a name="RepositoryCredentialsProviderArnInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```csharp
public string RepositoryCredentialsProviderArnInput { get; }
```

- *Type:* string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```csharp
public string RepositoryCredentialsProviderArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource"></a>

```csharp
private void PutS3DataSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList S3DataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```csharp
public object S3DataSourceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get"></a>

```csharp
private SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">AcceptEulaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptEulaInput`<sup>Optional</sup> <a name="AcceptEulaInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```csharp
public object AcceptEulaInput { get; }
```

- *Type:* object

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```csharp
public object AcceptEula { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">PutModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">ResetModelAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelAccessConfig` <a name="PutModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```csharp
private void PutModelAccessConfig(SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `ResetModelAccessConfig` <a name="ResetModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```csharp
private void ResetModelAccessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">ModelAccessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference ModelAccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `ModelAccessConfigInput`<sup>Optional</sup> <a name="ModelAccessConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig ModelAccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```csharp
public string S3DataTypeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```csharp
public string S3DataType { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="SagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerMultiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting">ResetModelCacheSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelCacheSetting` <a name="ResetModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```csharp
private void ResetModelCacheSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">ModelCacheSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelCacheSettingInput`<sup>Optional</sup> <a name="ModelCacheSettingInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```csharp
public string ModelCacheSettingInput { get; }
```

- *Type:* string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```csharp
public string ModelCacheSetting { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainerMultiModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelPrimaryContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">PutImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource">PutModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig">PutMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">ResetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">ResetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName">ResetInferenceSpecificationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource">ResetModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">ResetModelDataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName">ResetModelPackageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig">ResetMultiModelConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfig` <a name="PutImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```csharp
private void PutImageConfig(SagemakerModelPrimaryContainerImageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `PutModelDataSource` <a name="PutModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource"></a>

```csharp
private void PutModelDataSource(SagemakerModelPrimaryContainerModelDataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `PutMultiModelConfig` <a name="PutMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig"></a>

```csharp
private void PutMultiModelConfig(SagemakerModelPrimaryContainerMultiModelConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `ResetContainerHostname` <a name="ResetContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```csharp
private void ResetContainerHostname()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetImageConfig` <a name="ResetImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```csharp
private void ResetImageConfig()
```

##### `ResetInferenceSpecificationName` <a name="ResetInferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName"></a>

```csharp
private void ResetInferenceSpecificationName()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetModelDataSource` <a name="ResetModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource"></a>

```csharp
private void ResetModelDataSource()
```

##### `ResetModelDataUrl` <a name="ResetModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```csharp
private void ResetModelDataUrl()
```

##### `ResetModelPackageName` <a name="ResetModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName"></a>

```csharp
private void ResetModelPackageName()
```

##### `ResetMultiModelConfig` <a name="ResetMultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig"></a>

```csharp
private void ResetMultiModelConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">ContainerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">ImageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput">InferenceSpecificationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput">ModelDataSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">ModelDataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput">ModelPackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput">MultiModelConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfigOutputReference ImageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSourceOutputReference ModelDataSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```csharp
public SagemakerModelPrimaryContainerMultiModelConfigOutputReference MultiModelConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `ContainerHostnameInput`<sup>Optional</sup> <a name="ContainerHostnameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```csharp
public string ContainerHostnameInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageConfigInput`<sup>Optional</sup> <a name="ImageConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```csharp
public SagemakerModelPrimaryContainerImageConfig ImageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InferenceSpecificationNameInput`<sup>Optional</sup> <a name="InferenceSpecificationNameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```csharp
public string InferenceSpecificationNameInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ModelDataSourceInput`<sup>Optional</sup> <a name="ModelDataSourceInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput"></a>

```csharp
public SagemakerModelPrimaryContainerModelDataSource ModelDataSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `ModelDataUrlInput`<sup>Optional</sup> <a name="ModelDataUrlInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```csharp
public string ModelDataUrlInput { get; }
```

- *Type:* string

---

##### `ModelPackageNameInput`<sup>Optional</sup> <a name="ModelPackageNameInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput"></a>

```csharp
public string ModelPackageNameInput { get; }
```

- *Type:* string

---

##### `MultiModelConfigInput`<sup>Optional</sup> <a name="MultiModelConfigInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput"></a>

```csharp
public SagemakerModelPrimaryContainerMultiModelConfig MultiModelConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```csharp
public string ContainerHostname { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```csharp
public string InferenceSpecificationName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```csharp
public string ModelDataUrl { get; }
```

- *Type:* string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```csharp
public string ModelPackageName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelPrimaryContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerModelVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerModelVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---



