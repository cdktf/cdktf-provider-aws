# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktf/provider-aws.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component aws_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderComponent(Construct Scope, string Id, ImagebuilderComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">ResetChangeDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">ResetSupportedOsVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetChangeDescription` <a name="ResetChangeDescription" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```csharp
private void ResetChangeDescription()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSkipDestroy"></a>

```csharp
private void ResetSkipDestroy()
```

##### `ResetSupportedOsVersions` <a name="ResetSupportedOsVersions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```csharp
private void ResetSupportedOsVersions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```csharp
private void ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.encrypted">Encrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">ChangeDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">SupportedOsVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">ChangeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ChangeDescriptionInput`<sup>Optional</sup> <a name="ChangeDescriptionInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```csharp
public string ChangeDescriptionInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroyInput"></a>

```csharp
public object SkipDestroyInput { get; }
```

- *Type:* object

---

##### `SupportedOsVersionsInput`<sup>Optional</sup> <a name="SupportedOsVersionsInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```csharp
public string[] SupportedOsVersionsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ChangeDescription`<sup>Required</sup> <a name="ChangeDescription" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```csharp
public string ChangeDescription { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; }
```

- *Type:* object

---

##### `SupportedOsVersions`<sup>Required</sup> <a name="SupportedOsVersions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```csharp
public string[] SupportedOsVersions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderComponentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Platform,
    string Version,
    string ChangeDescription = null,
    string Data = null,
    string Description = null,
    string Id = null,
    string KmsKeyId = null,
    object SkipDestroy = null,
    string[] SupportedOsVersions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#name ImagebuilderComponent#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#platform ImagebuilderComponent#platform}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#version ImagebuilderComponent#version}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">ChangeDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#change_description ImagebuilderComponent#change_description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#data ImagebuilderComponent#data}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#description ImagebuilderComponent#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#id ImagebuilderComponent#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#tags ImagebuilderComponent#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#uri ImagebuilderComponent#uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#name ImagebuilderComponent#name}.

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#platform ImagebuilderComponent#platform}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#version ImagebuilderComponent#version}.

---

##### `ChangeDescription`<sup>Optional</sup> <a name="ChangeDescription" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```csharp
public string ChangeDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#change_description ImagebuilderComponent#change_description}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#data ImagebuilderComponent#data}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#description ImagebuilderComponent#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#id ImagebuilderComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}.

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}.

---

##### `SupportedOsVersions`<sup>Optional</sup> <a name="SupportedOsVersions" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```csharp
public string[] SupportedOsVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#tags ImagebuilderComponent#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component#uri ImagebuilderComponent#uri}.

---



