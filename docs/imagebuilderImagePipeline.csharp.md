# `imagebuilderImagePipeline` Submodule <a name="`imagebuilderImagePipeline` Submodule" id="@cdktf/provider-aws.imagebuilderImagePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImagePipeline <a name="ImagebuilderImagePipeline" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}.

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
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

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

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

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

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

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

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.resetImageRecipeArn"></a>

```csharp
private void ResetImageRecipeArn()
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

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

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
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.count">Count</a></code> | <code>double</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfigurationOutputReference">ImagebuilderImagePipelineImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineScheduleOutputReference">ImagebuilderImagePipelineScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipeline.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | *No description.* |
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
public double Count { get; }
```

- *Type:* double

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
    double Count = null,
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
    string Id = null,
    string ImageRecipeArn = null,
    ImagebuilderImagePipelineImageTestsConfiguration ImageTestsConfiguration = null,
    ImagebuilderImagePipelineSchedule Schedule = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}.

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}.

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.enhancedImageMetadataEnabled"></a>

```csharp
public object EnhancedImageMetadataEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImagePipelineImageTestsConfiguration ImageTestsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration">ImagebuilderImagePipelineImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.schedule"></a>

```csharp
public ImagebuilderImagePipelineSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule">ImagebuilderImagePipelineSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}.

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
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.imageTestsEnabled"></a>

```csharp
public object ImageTestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineImageTestsConfiguration.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.

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
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition">PipelineExecutionStartCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}. |

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}.

---

##### `PipelineExecutionStartCondition`<sup>Optional</sup> <a name="PipelineExecutionStartCondition" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.pipelineExecutionStartCondition"></a>

```csharp
public string PipelineExecutionStartCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-aws.imagebuilderImagePipeline.ImagebuilderImagePipelineSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}.

---

## Classes <a name="Classes" id="Classes"></a>

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



