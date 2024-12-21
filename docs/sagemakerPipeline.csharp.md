# `sagemakerPipeline` Submodule <a name="`sagemakerPipeline` Submodule" id="@cdktf/provider-aws.sagemakerPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPipeline <a name="SagemakerPipeline" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipeline(Construct Scope, string Id, SagemakerPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration">PutParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location">PutPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration">ResetParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition">ResetPipelineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location">ResetPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription">ResetPipelineDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParallelismConfiguration` <a name="PutParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration"></a>

```csharp
private void PutParallelismConfiguration(SagemakerPipelineParallelismConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `PutPipelineDefinitionS3Location` <a name="PutPipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location"></a>

```csharp
private void PutPipelineDefinitionS3Location(SagemakerPipelinePipelineDefinitionS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParallelismConfiguration` <a name="ResetParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration"></a>

```csharp
private void ResetParallelismConfiguration()
```

##### `ResetPipelineDefinition` <a name="ResetPipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition"></a>

```csharp
private void ResetPipelineDefinition()
```

##### `ResetPipelineDefinitionS3Location` <a name="ResetPipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location"></a>

```csharp
private void ResetPipelineDefinitionS3Location()
```

##### `ResetPipelineDescription` <a name="ResetPipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription"></a>

```csharp
private void ResetPipelineDescription()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerPipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput">ParallelismConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput">PipelineDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput">PipelineDefinitionS3LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput">PipelineDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput">PipelineDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput">PipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition">PipelineDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription">PipelineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ParallelismConfiguration`<sup>Required</sup> <a name="ParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration"></a>

```csharp
public SagemakerPipelineParallelismConfigurationOutputReference ParallelismConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a>

---

##### `PipelineDefinitionS3Location`<sup>Required</sup> <a name="PipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3LocationOutputReference PipelineDefinitionS3Location { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParallelismConfigurationInput`<sup>Optional</sup> <a name="ParallelismConfigurationInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput"></a>

```csharp
public SagemakerPipelineParallelismConfiguration ParallelismConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `PipelineDefinitionInput`<sup>Optional</sup> <a name="PipelineDefinitionInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput"></a>

```csharp
public string PipelineDefinitionInput { get; }
```

- *Type:* string

---

##### `PipelineDefinitionS3LocationInput`<sup>Optional</sup> <a name="PipelineDefinitionS3LocationInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3LocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `PipelineDescriptionInput`<sup>Optional</sup> <a name="PipelineDescriptionInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput"></a>

```csharp
public string PipelineDescriptionInput { get; }
```

- *Type:* string

---

##### `PipelineDisplayNameInput`<sup>Optional</sup> <a name="PipelineDisplayNameInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput"></a>

```csharp
public string PipelineDisplayNameInput { get; }
```

- *Type:* string

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput"></a>

```csharp
public string PipelineNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineDefinition`<sup>Required</sup> <a name="PipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition"></a>

```csharp
public string PipelineDefinition { get; }
```

- *Type:* string

---

##### `PipelineDescription`<sup>Required</sup> <a name="PipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription"></a>

```csharp
public string PipelineDescription { get; }
```

- *Type:* string

---

##### `PipelineDisplayName`<sup>Required</sup> <a name="PipelineDisplayName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName"></a>

```csharp
public string PipelineDisplayName { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPipelineConfig <a name="SagemakerPipelineConfig" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PipelineDisplayName,
    string PipelineName,
    string Id = null,
    SagemakerPipelineParallelismConfiguration ParallelismConfiguration = null,
    string PipelineDefinition = null,
    SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3Location = null,
    string PipelineDescription = null,
    string RoleArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName">PipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | parallelism_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition">PipelineDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | pipeline_definition_s3_location block. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription">PipelineDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PipelineDisplayName`<sup>Required</sup> <a name="PipelineDisplayName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName"></a>

```csharp
public string PipelineDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}.

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName"></a>

```csharp
public string PipelineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParallelismConfiguration`<sup>Optional</sup> <a name="ParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration"></a>

```csharp
public SagemakerPipelineParallelismConfiguration ParallelismConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

parallelism_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}

---

##### `PipelineDefinition`<sup>Optional</sup> <a name="PipelineDefinition" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition"></a>

```csharp
public string PipelineDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}.

---

##### `PipelineDefinitionS3Location`<sup>Optional</sup> <a name="PipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3Location { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

pipeline_definition_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}

---

##### `PipelineDescription`<sup>Optional</sup> <a name="PipelineDescription" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription"></a>

```csharp
public string PipelineDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}.

---

### SagemakerPipelineParallelismConfiguration <a name="SagemakerPipelineParallelismConfiguration" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipelineParallelismConfiguration {
    double MaxParallelExecutionSteps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}. |

---

##### `MaxParallelExecutionSteps`<sup>Required</sup> <a name="MaxParallelExecutionSteps" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps"></a>

```csharp
public double MaxParallelExecutionSteps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}.

---

### SagemakerPipelinePipelineDefinitionS3Location <a name="SagemakerPipelinePipelineDefinitionS3Location" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipelinePipelineDefinitionS3Location {
    string Bucket,
    string ObjectKey,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey">ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}.

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey"></a>

```csharp
public string ObjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPipelineParallelismConfigurationOutputReference <a name="SagemakerPipelineParallelismConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipelineParallelismConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput">MaxParallelExecutionStepsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxParallelExecutionStepsInput`<sup>Optional</sup> <a name="MaxParallelExecutionStepsInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput"></a>

```csharp
public double MaxParallelExecutionStepsInput { get; }
```

- *Type:* double

---

##### `MaxParallelExecutionSteps`<sup>Required</sup> <a name="MaxParallelExecutionSteps" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps"></a>

```csharp
public double MaxParallelExecutionSteps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerPipelineParallelismConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---


### SagemakerPipelinePipelineDefinitionS3LocationOutputReference <a name="SagemakerPipelinePipelineDefinitionS3LocationOutputReference" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerPipelinePipelineDefinitionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```csharp
public string ObjectKeyInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---



