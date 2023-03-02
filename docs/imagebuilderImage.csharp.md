# `imagebuilderImage` Submodule <a name="`imagebuilderImage` Submodule" id="@cdktf/provider-aws.imagebuilderImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImage <a name="ImagebuilderImage" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image aws_imagebuilder_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImage(Construct Scope, string Id, ImagebuilderImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutImageTestsConfiguration` <a name="PutImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration"></a>

```csharp
private void PutImageTestsConfiguration(ImagebuilderImageImageTestsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts"></a>

```csharp
private void PutTimeouts(ImagebuilderImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `ResetContainerRecipeArn` <a name="ResetContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn"></a>

```csharp
private void ResetContainerRecipeArn()
```

##### `ResetDistributionConfigurationArn` <a name="ResetDistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn"></a>

```csharp
private void ResetDistributionConfigurationArn()
```

##### `ResetEnhancedImageMetadataEnabled` <a name="ResetEnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled"></a>

```csharp
private void ResetEnhancedImageMetadataEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn"></a>

```csharp
private void ResetImageRecipeArn()
```

##### `ResetImageTestsConfiguration` <a name="ResetImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration"></a>

```csharp
private void ResetImageTestsConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources">OutputResources</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `ImageTestsConfiguration`<sup>Required</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImageImageTestsConfigurationOutputReference ImageTestsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `OutputResources`<sup>Required</sup> <a name="OutputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources"></a>

```csharp
public ImagebuilderImageOutputResourcesList OutputResources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts"></a>

```csharp
public ImagebuilderImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ContainerRecipeArnInput`<sup>Optional</sup> <a name="ContainerRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput"></a>

```csharp
public string ContainerRecipeArnInput { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArnInput`<sup>Optional</sup> <a name="DistributionConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput"></a>

```csharp
public string DistributionConfigurationArnInput { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput"></a>

```csharp
public object EnhancedImageMetadataEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageRecipeArnInput`<sup>Optional</sup> <a name="ImageRecipeArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput"></a>

```csharp
public string ImageRecipeArnInput { get; }
```

- *Type:* string

---

##### `ImageTestsConfigurationInput`<sup>Optional</sup> <a name="ImageTestsConfigurationInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration ImageTestsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `InfrastructureConfigurationArnInput`<sup>Optional</sup> <a name="InfrastructureConfigurationArnInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput"></a>

```csharp
public string InfrastructureConfigurationArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerRecipeArn`<sup>Required</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArn`<sup>Required</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabled`<sup>Required</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

```csharp
public object EnhancedImageMetadataEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageRecipeArn`<sup>Required</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; }
```

- *Type:* string

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageConfig <a name="ImagebuilderImageConfig" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InfrastructureConfigurationArn,
    string ContainerRecipeArn = null,
    string DistributionConfigurationArn = null,
    object EnhancedImageMetadataEnabled = null,
    string Id = null,
    string ImageRecipeArn = null,
    ImagebuilderImageImageTestsConfiguration ImageTestsConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ImagebuilderImageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#id ImagebuilderImage#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags ImagebuilderImage#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags_all ImagebuilderImage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}.

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}.

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}.

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled"></a>

```csharp
public object EnhancedImageMetadataEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#id ImagebuilderImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}.

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration ImageTestsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags ImagebuilderImage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#tags_all ImagebuilderImage#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts"></a>

```csharp
public ImagebuilderImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeouts ImagebuilderImage#timeouts}

---

### ImagebuilderImageImageTestsConfiguration <a name="ImagebuilderImageImageTestsConfiguration" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageImageTestsConfiguration {
    object ImageTestsEnabled = null,
    double TimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled"></a>

```csharp
public object ImageTestsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}.

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}.

---

### ImagebuilderImageOutputResources <a name="ImagebuilderImageOutputResources" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResources {

};
```


### ImagebuilderImageOutputResourcesAmis <a name="ImagebuilderImageOutputResourcesAmis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResourcesAmis {

};
```


### ImagebuilderImageTimeouts <a name="ImagebuilderImageTimeouts" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#create ImagebuilderImage#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image#create ImagebuilderImage#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageImageTestsConfigurationOutputReference <a name="ImagebuilderImageImageTestsConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageImageTestsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled">ResetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTestsEnabled` <a name="ResetImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```csharp
private void ResetImageTestsEnabled()
```

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```csharp
private void ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">ImageTestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageTestsEnabledInput`<sup>Optional</sup> <a name="ImageTestsEnabledInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```csharp
public object ImageTestsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```csharp
public double TimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `ImageTestsEnabled`<sup>Required</sup> <a name="ImageTestsEnabled" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```csharp
public object ImageTestsEnabled { get; }
```

- *Type:* object

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---


### ImagebuilderImageOutputResourcesAmisList <a name="ImagebuilderImageOutputResourcesAmisList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResourcesAmisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get"></a>

```csharp
private ImagebuilderImageOutputResourcesAmisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesAmisOutputReference <a name="ImagebuilderImageOutputResourcesAmisOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResourcesAmisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageOutputResourcesAmis InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a>

---


### ImagebuilderImageOutputResourcesList <a name="ImagebuilderImageOutputResourcesList" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get"></a>

```csharp
private ImagebuilderImageOutputResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesOutputReference <a name="ImagebuilderImageOutputResourcesOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageOutputResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis">Amis</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis"></a>

```csharp
public ImagebuilderImageOutputResourcesAmisList Amis { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageOutputResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a>

---


### ImagebuilderImageTimeoutsOutputReference <a name="ImagebuilderImageTimeoutsOutputReference" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



