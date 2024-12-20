# `imagebuilderImagePipeline` Submodule <a name="`imagebuilderImagePipeline` Submodule" id="@cdktf/provider-aws.imagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImagePipeline <a name="ImagebuilderImagePipeline" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipeline(Construct Scope, string Id, ImagebuilderImagePipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig">ImagebuilderImagePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration">PutImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow">PutWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration">ResetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImageScanningConfiguration` <a name="PutImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration"></a>

```csharp
private void PutImageScanningConfiguration(ImagebuilderImagePipelineImageScanningConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `PutImageTestsConfiguration` <a name="PutImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration"></a>

```csharp
private void PutImageTestsConfiguration(ImagebuilderImagePipelineImageTestsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule"></a>

```csharp
private void PutSchedule(ImagebuilderImagePipelineSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `PutWorkflow` <a name="PutWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow"></a>

```csharp
private void PutWorkflow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putWorkflow.parameter.value"></a>

- *Type:* object

---

##### `ResetContainerRecipeArn` <a name="ResetContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn"></a>

```csharp
private void ResetContainerRecipeArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDistributionConfigurationArn` <a name="ResetDistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn"></a>

```csharp
private void ResetDistributionConfigurationArn()
```

##### `ResetEnhancedImageMetadataEnabled` <a name="ResetEnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled"></a>

```csharp
private void ResetEnhancedImageMetadataEnabled()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetExecutionRole"></a>

```csharp
private void ResetExecutionRole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn"></a>

```csharp
private void ResetImageRecipeArn()
```

##### `ResetImageScanningConfiguration` <a name="ResetImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageScanningConfiguration"></a>

```csharp
private void ResetImageScanningConfiguration()
```

##### `ResetImageTestsConfiguration` <a name="ResetImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration"></a>

```csharp
private void ResetImageTestsConfiguration()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImagePipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImagePipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImagePipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImagePipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImagePipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImagePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderImagePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun">DateLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun">DateNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated">DateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow">Workflow</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput">ImageScanningConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput">WorkflowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `DateLastRun`<sup>Required</sup> <a name="DateLastRun" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateLastRun"></a>

```csharp
public string DateLastRun { get; }
```

- *Type:* string

---

##### `DateNextRun`<sup>Required</sup> <a name="DateNextRun" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateNextRun"></a>

```csharp
public string DateNextRun { get; }
```

- *Type:* string

---

##### `DateUpdated`<sup>Required</sup> <a name="DateUpdated" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.dateUpdated"></a>

```csharp
public string DateUpdated { get; }
```

- *Type:* string

---

##### `ImageScanningConfiguration`<sup>Required</sup> <a name="ImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfigurationOutputReference ImageScanningConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationOutputReference</a>

---

##### `ImageTestsConfiguration`<sup>Required</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageTestsConfigurationOutputReference ImageTestsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule"></a>

```csharp
public ImagebuilderImagePipelineScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a>

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflow"></a>

```csharp
public ImagebuilderImagePipelineWorkflowList Workflow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList">ImagebuilderImagePipelineWorkflowList</a>

---

##### `ContainerRecipeArnInput`<sup>Optional</sup> <a name="ContainerRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput"></a>

```csharp
public string ContainerRecipeArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArnInput`<sup>Optional</sup> <a name="DistributionConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput"></a>

```csharp
public string DistributionConfigurationArnInput { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput"></a>

```csharp
public object EnhancedImageMetadataEnabledInput { get; }
```

- *Type:* object

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageRecipeArnInput`<sup>Optional</sup> <a name="ImageRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput"></a>

```csharp
public string ImageRecipeArnInput { get; }
```

- *Type:* string

---

##### `ImageScanningConfigurationInput`<sup>Optional</sup> <a name="ImageScanningConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageScanningConfigurationInput"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfiguration ImageScanningConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---

##### `ImageTestsConfigurationInput`<sup>Optional</sup> <a name="ImageTestsConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput"></a>

```csharp
public ImagebuilderImagePipelineImageTestsConfiguration ImageTestsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---

##### `InfrastructureConfigurationArnInput`<sup>Optional</sup> <a name="InfrastructureConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput"></a>

```csharp
public string InfrastructureConfigurationArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput"></a>

```csharp
public ImagebuilderImagePipelineSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.workflowInput"></a>

```csharp
public object WorkflowInput { get; }
```

- *Type:* object

---

##### `ContainerRecipeArn`<sup>Required</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArn`<sup>Required</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabled`<sup>Required</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled"></a>

```csharp
public object EnhancedImageMetadataEnabled { get; }
```

- *Type:* object

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageRecipeArn`<sup>Required</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; }
```

- *Type:* string

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImagePipelineConfig <a name="ImagebuilderImagePipelineConfig" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InfrastructureConfigurationArn,
    string Name,
    string ContainerRecipeArn = null,
    string Description = null,
    string DistributionConfigurationArn = null,
    object EnhancedImageMetadataEnabled = null,
    string ExecutionRole = null,
    string Id = null,
    string ImageRecipeArn = null,
    ImagebuilderImagePipelineImageScanningConfiguration ImageScanningConfiguration = null,
    ImagebuilderImagePipelineImageTestsConfiguration ImageTestsConfiguration = null,
    ImagebuilderImagePipelineSchedule Schedule = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object Workflow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow">Workflow</a></code> | <code>object</code> | workflow block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}.

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled"></a>

```csharp
public object EnhancedImageMetadataEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.

---

##### `ImageScanningConfiguration`<sup>Optional</sup> <a name="ImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageScanningConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfiguration ImageScanningConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageTestsConfiguration ImageTestsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule"></a>

```csharp
public ImagebuilderImagePipelineSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}.

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.workflow"></a>

```csharp
public object Workflow { get; set; }
```

- *Type:* object

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#workflow ImagebuilderImagePipeline#workflow}

---

### ImagebuilderImagePipelineImageScanningConfiguration <a name="ImagebuilderImagePipelineImageScanningConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageScanningConfiguration {
    ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration EcrConfiguration = null,
    object ImageScanningEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | ecr_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}. |

---

##### `EcrConfiguration`<sup>Optional</sup> <a name="EcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.ecrConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration EcrConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}

---

##### `ImageScanningEnabled`<sup>Optional</sup> <a name="ImageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration.property.imageScanningEnabled"></a>

```csharp
public object ImageScanningEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}.

---

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
    string[] ContainerTags = null,
    string RepositoryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}. |

---

##### `ContainerTags`<sup>Optional</sup> <a name="ContainerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}.

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}.

---

### ImagebuilderImagePipelineImageTestsConfiguration <a name="ImagebuilderImagePipelineImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageTestsConfiguration {
    object ImageTestsEnabled = null,
    double TimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

```csharp
public object ImageTestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.

---

### ImagebuilderImagePipelineSchedule <a name="ImagebuilderImagePipelineSchedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineSchedule {
    string ScheduleExpression,
    string PipelineExecutionStartCondition = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition">PipelineExecutionStartCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}. |

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}.

---

##### `PipelineExecutionStartCondition`<sup>Optional</sup> <a name="PipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

```csharp
public string PipelineExecutionStartCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}.

---

### ImagebuilderImagePipelineWorkflow <a name="ImagebuilderImagePipelineWorkflow" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflow {
    string WorkflowArn,
    string OnFailure = null,
    string ParallelGroup = null,
    object Parameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure">OnFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup">ParallelGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}.

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.onFailure"></a>

```csharp
public string OnFailure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}.

---

##### `ParallelGroup`<sup>Optional</sup> <a name="ParallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parallelGroup"></a>

```csharp
public string ParallelGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflow.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#parameter ImagebuilderImagePipeline#parameter}

---

### ImagebuilderImagePipelineWorkflowParameter <a name="ImagebuilderImagePipelineWorkflowParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflowParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">ResetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerTags` <a name="ResetContainerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```csharp
private void ResetContainerTags()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">ContainerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```csharp
public string[] ContainerTagsInput { get; }
```

- *Type:* string[]

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; }
```

- *Type:* string[]

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImagePipelineImageScanningConfigurationOutputReference <a name="ImagebuilderImagePipelineImageScanningConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageScanningConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration">PutEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration">ResetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled">ResetImageScanningEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrConfiguration` <a name="PutEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```csharp
private void PutEcrConfiguration(ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `ResetEcrConfiguration` <a name="ResetEcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```csharp
private void ResetEcrConfiguration()
```

##### `ResetImageScanningEnabled` <a name="ResetImageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```csharp
private void ResetImageScanningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput">EcrConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">ImageScanningEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EcrConfiguration`<sup>Required</sup> <a name="EcrConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference EcrConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `EcrConfigurationInput`<sup>Optional</sup> <a name="EcrConfigurationInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration EcrConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration">ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration</a>

---

##### `ImageScanningEnabledInput`<sup>Optional</sup> <a name="ImageScanningEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```csharp
public object ImageScanningEnabledInput { get; }
```

- *Type:* object

---

##### `ImageScanningEnabled`<sup>Required</sup> <a name="ImageScanningEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```csharp
public object ImageScanningEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImagePipelineImageScanningConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageScanningConfiguration">ImagebuilderImagePipelineImageScanningConfiguration</a>

---


### ImagebuilderImagePipelineImageTestsConfigurationOutputReference <a name="ImagebuilderImagePipelineImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineImageTestsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled">ResetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTestsEnabled` <a name="ResetImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```csharp
private void ResetImageTestsEnabled()
```

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```csharp
private void ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">ImageTestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageTestsEnabledInput`<sup>Optional</sup> <a name="ImageTestsEnabledInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```csharp
public object ImageTestsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```csharp
public double TimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `ImageTestsEnabled`<sup>Required</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```csharp
public object ImageTestsEnabled { get; }
```

- *Type:* object

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImagePipelineImageTestsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

---


### ImagebuilderImagePipelineScheduleOutputReference <a name="ImagebuilderImagePipelineScheduleOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition">ResetPipelineExecutionStartCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPipelineExecutionStartCondition` <a name="ResetPipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetPipelineExecutionStartCondition"></a>

```csharp
private void ResetPipelineExecutionStartCondition()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput">PipelineExecutionStartConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition">PipelineExecutionStartCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineExecutionStartConditionInput`<sup>Optional</sup> <a name="PipelineExecutionStartConditionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartConditionInput"></a>

```csharp
public string PipelineExecutionStartConditionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `PipelineExecutionStartCondition`<sup>Required</sup> <a name="PipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.pipelineExecutionStartCondition"></a>

```csharp
public string PipelineExecutionStartCondition { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImagePipelineSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

---


### ImagebuilderImagePipelineWorkflowList <a name="ImagebuilderImagePipelineWorkflowList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get"></a>

```csharp
private ImagebuilderImagePipelineWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderImagePipelineWorkflowOutputReference <a name="ImagebuilderImagePipelineWorkflowOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup">ResetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetParallelGroup` <a name="ResetParallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParallelGroup"></a>

```csharp
private void ResetParallelGroup()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput">ParallelGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput">WorkflowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure">OnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup">ParallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameter"></a>

```csharp
public ImagebuilderImagePipelineWorkflowParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList">ImagebuilderImagePipelineWorkflowParameterList</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailureInput"></a>

```csharp
public string OnFailureInput { get; }
```

- *Type:* string

---

##### `ParallelGroupInput`<sup>Optional</sup> <a name="ParallelGroupInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroupInput"></a>

```csharp
public string ParallelGroupInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `WorkflowArnInput`<sup>Optional</sup> <a name="WorkflowArnInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArnInput"></a>

```csharp
public string WorkflowArnInput { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.onFailure"></a>

```csharp
public string OnFailure { get; }
```

- *Type:* string

---

##### `ParallelGroup`<sup>Required</sup> <a name="ParallelGroup" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.parallelGroup"></a>

```csharp
public string ParallelGroup { get; }
```

- *Type:* string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderImagePipelineWorkflowParameterList <a name="ImagebuilderImagePipelineWorkflowParameterList" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflowParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get"></a>

```csharp
private ImagebuilderImagePipelineWorkflowParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderImagePipelineWorkflowParameterOutputReference <a name="ImagebuilderImagePipelineWorkflowParameterOutputReference" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImagePipelineWorkflowParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineWorkflowParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



