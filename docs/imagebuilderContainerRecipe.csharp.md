# `imagebuilderContainerRecipe` Submodule <a name="`imagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.imagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderContainerRecipe <a name="ImagebuilderContainerRecipe" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipe(Construct Scope, string Id, ImagebuilderContainerRecipeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent">PutComponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration">PutInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository">PutTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData">ResetDockerfileTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri">ResetDockerfileTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration">ResetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutComponent` <a name="PutComponent" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent"></a>

```csharp
private void PutComponent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponent.parameter.value"></a>

- *Type:* object

---

##### `PutInstanceConfiguration` <a name="PutInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration"></a>

```csharp
private void PutInstanceConfiguration(ImagebuilderContainerRecipeInstanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `PutTargetRepository` <a name="PutTargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository"></a>

```csharp
private void PutTargetRepository(ImagebuilderContainerRecipeTargetRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDockerfileTemplateData` <a name="ResetDockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData"></a>

```csharp
private void ResetDockerfileTemplateData()
```

##### `ResetDockerfileTemplateUri` <a name="ResetDockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri"></a>

```csharp
private void ResetDockerfileTemplateUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceConfiguration` <a name="ResetInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration"></a>

```csharp
private void ResetInstanceConfiguration()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderContainerRecipe.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderContainerRecipe.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderContainerRecipe.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component">Component</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted">Encrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput">ComponentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput">ContainerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput">DockerfileTemplateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput">DockerfileTemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput">InstanceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput">ParentImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput">TargetRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType">ContainerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage">ParentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.component"></a>

```csharp
public ImagebuilderContainerRecipeComponentList Component { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList">ImagebuilderContainerRecipeComponentList</a>

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationOutputReference InstanceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepositoryOutputReference TargetRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentInput"></a>

```csharp
public object ComponentInput { get; }
```

- *Type:* object

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput"></a>

```csharp
public string ContainerTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DockerfileTemplateDataInput`<sup>Optional</sup> <a name="DockerfileTemplateDataInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput"></a>

```csharp
public string DockerfileTemplateDataInput { get; }
```

- *Type:* string

---

##### `DockerfileTemplateUriInput`<sup>Optional</sup> <a name="DockerfileTemplateUriInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput"></a>

```csharp
public string DockerfileTemplateUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceConfigurationInput`<sup>Optional</sup> <a name="InstanceConfigurationInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfiguration InstanceConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentImageInput`<sup>Optional</sup> <a name="ParentImageInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput"></a>

```csharp
public string ParentImageInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetRepositoryInput`<sup>Optional</sup> <a name="TargetRepositoryInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepository TargetRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType"></a>

```csharp
public string ContainerType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DockerfileTemplateData`<sup>Required</sup> <a name="DockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```csharp
public string DockerfileTemplateData { get; }
```

- *Type:* string

---

##### `DockerfileTemplateUri`<sup>Required</sup> <a name="DockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```csharp
public string DockerfileTemplateUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage"></a>

```csharp
public string ParentImage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderContainerRecipeComponent <a name="ImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponent {
    string ComponentArn,
    object Parameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn">ComponentArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.componentArn"></a>

```csharp
public string ComponentArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponent.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parameter ImagebuilderContainerRecipe#parameter}

---

### ImagebuilderContainerRecipeComponentParameter <a name="ImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponentParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}.

---

### ImagebuilderContainerRecipeConfig <a name="ImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Component,
    string ContainerType,
    string Name,
    string ParentImage,
    ImagebuilderContainerRecipeTargetRepository TargetRepository,
    string Version,
    string Description = null,
    string DockerfileTemplateData = null,
    string DockerfileTemplateUri = null,
    string Id = null,
    ImagebuilderContainerRecipeInstanceConfiguration InstanceConfiguration = null,
    string KmsKeyId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component">Component</a></code> | <code>object</code> | component block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType">ContainerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage">ParentImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData">DockerfileTemplateData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri">DockerfileTemplateUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | instance_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.component"></a>

```csharp
public object Component { get; set; }
```

- *Type:* object

component block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#component ImagebuilderContainerRecipe#component}

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType"></a>

```csharp
public string ContainerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}.

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage"></a>

```csharp
public string ParentImage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}.

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepository TargetRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}.

---

##### `DockerfileTemplateData`<sup>Optional</sup> <a name="DockerfileTemplateData" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData"></a>

```csharp
public string DockerfileTemplateData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}.

---

##### `DockerfileTemplateUri`<sup>Optional</sup> <a name="DockerfileTemplateUri" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri"></a>

```csharp
public string DockerfileTemplateUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceConfiguration`<sup>Optional</sup> <a name="InstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfiguration InstanceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

instance_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}.

---

### ImagebuilderContainerRecipeInstanceConfiguration <a name="ImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfiguration {
    object BlockDeviceMapping = null,
    string Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code>object</code> | block_device_mapping block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}. |

---

##### `BlockDeviceMapping`<sup>Optional</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMapping"></a>

```csharp
public object BlockDeviceMapping { get; set; }
```

- *Type:* object

block_device_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#block_device_mapping ImagebuilderContainerRecipe#block_device_mapping}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping {
    string DeviceName = null,
    ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs Ebs = null,
    object NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice">NoDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.ebs"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.noDevice"></a>

```csharp
public object NoDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}.

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {
    string DeleteOnTermination = null,
    string Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted">Encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.encrypted"></a>

```csharp
public string Encrypted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}.

---

### ImagebuilderContainerRecipeTargetRepository <a name="ImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeTargetRepository {
    string RepositoryName,
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}. |

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderContainerRecipeComponentList <a name="ImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get"></a>

```csharp
private ImagebuilderContainerRecipeComponentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeComponentOutputReference <a name="ImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput">ComponentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn">ComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```csharp
public ImagebuilderContainerRecipeComponentParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList">ImagebuilderContainerRecipeComponentParameterList</a>

---

##### `ComponentArnInput`<sup>Optional</sup> <a name="ComponentArnInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArnInput"></a>

```csharp
public string ComponentArnInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```csharp
public string ComponentArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeComponentParameterList <a name="ImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponentParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get"></a>

```csharp
private ImagebuilderContainerRecipeComponentParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeComponentParameterOutputReference <a name="ImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeComponentParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public string DeleteOnTerminationInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encryptedInput"></a>

```csharp
public string EncryptedInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```csharp
public string Encrypted { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```csharp
private ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs"></a>

```csharp
private void PutEbs(ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">NoDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebsInput"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDeviceInput"></a>

```csharp
public object NoDeviceInput { get; }
```

- *Type:* object

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```csharp
public object NoDevice { get; }
```

- *Type:* object

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeInstanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping">PutBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping">ResetBlockDeviceMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockDeviceMapping` <a name="PutBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping"></a>

```csharp
private void PutBlockDeviceMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMapping.parameter.value"></a>

- *Type:* object

---

##### `ResetBlockDeviceMapping` <a name="ResetBlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMapping"></a>

```csharp
private void ResetBlockDeviceMapping()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput">BlockDeviceMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockDeviceMapping`<sup>Required</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList BlockDeviceMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `BlockDeviceMappingInput`<sup>Optional</sup> <a name="BlockDeviceMappingInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingInput"></a>

```csharp
public object BlockDeviceMappingInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderContainerRecipeInstanceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---


### ImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="ImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderContainerRecipeTargetRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderContainerRecipeTargetRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---



