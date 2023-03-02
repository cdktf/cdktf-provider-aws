# `imagebuilderDistributionConfiguration` Submodule <a name="`imagebuilderDistributionConfiguration` Submodule" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderDistributionConfiguration <a name="ImagebuilderDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfiguration(Construct Scope, string Id, ImagebuilderDistributionConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution">PutDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDistribution` <a name="PutDistribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution"></a>

```csharp
private void PutDistribution(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderDistributionConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderDistributionConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ImagebuilderDistributionConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateUpdated">DateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distribution">Distribution</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList">ImagebuilderDistributionConfigurationDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionInput">DistributionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `DateUpdated`<sup>Required</sup> <a name="DateUpdated" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateUpdated"></a>

```csharp
public string DateUpdated { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distribution"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionList Distribution { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList">ImagebuilderDistributionConfigurationDistributionList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionInput"></a>

```csharp
public object DistributionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderDistributionConfigurationConfig <a name="ImagebuilderDistributionConfigurationConfig" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Distribution,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distribution">Distribution</a></code> | <code>object</code> | distribution block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distribution"></a>

```csharp
public object Distribution { get; set; }
```

- *Type:* object

distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#distribution ImagebuilderDistributionConfiguration#distribution}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}.

---

### ImagebuilderDistributionConfigurationDistribution <a name="ImagebuilderDistributionConfigurationDistribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistribution {
    string Region,
    ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration AmiDistributionConfiguration = null,
    ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration ContainerDistributionConfiguration = null,
    object FastLaunchConfiguration = null,
    object LaunchTemplateConfiguration = null,
    string[] LicenseConfigurationArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.amiDistributionConfiguration">AmiDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | ami_distribution_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.containerDistributionConfiguration">ContainerDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | container_distribution_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.fastLaunchConfiguration">FastLaunchConfiguration</a></code> | <code>object</code> | fast_launch_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.launchTemplateConfiguration">LaunchTemplateConfiguration</a></code> | <code>object</code> | launch_template_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}.

---

##### `AmiDistributionConfiguration`<sup>Optional</sup> <a name="AmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.amiDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration AmiDistributionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

ami_distribution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}

---

##### `ContainerDistributionConfiguration`<sup>Optional</sup> <a name="ContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.containerDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration ContainerDistributionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

container_distribution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}

---

##### `FastLaunchConfiguration`<sup>Optional</sup> <a name="FastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.fastLaunchConfiguration"></a>

```csharp
public object FastLaunchConfiguration { get; set; }
```

- *Type:* object

fast_launch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#fast_launch_configuration ImagebuilderDistributionConfiguration#fast_launch_configuration}

---

##### `LaunchTemplateConfiguration`<sup>Optional</sup> <a name="LaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.launchTemplateConfiguration"></a>

```csharp
public object LaunchTemplateConfiguration { get; set; }
```

- *Type:* object

launch_template_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_configuration ImagebuilderDistributionConfiguration#launch_template_configuration}

---

##### `LicenseConfigurationArns`<sup>Optional</sup> <a name="LicenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}.

---

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
    System.Collections.Generic.IDictionary<string, string> AmiTags = null,
    string Description = null,
    string KmsKeyId = null,
    ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission LaunchPermission = null,
    string Name = null,
    string[] TargetAccountIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.launchPermission">LaunchPermission</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | launch_permission block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.targetAccountIds">TargetAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}. |

---

##### `AmiTags`<sup>Optional</sup> <a name="AmiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}.

---

##### `LaunchPermission`<sup>Optional</sup> <a name="LaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.launchPermission"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission LaunchPermission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

launch_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_permission ImagebuilderDistributionConfiguration#launch_permission}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}.

---

##### `TargetAccountIds`<sup>Optional</sup> <a name="TargetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.targetAccountIds"></a>

```csharp
public string[] TargetAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}.

---

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
    string[] OrganizationalUnitArns = null,
    string[] OrganizationArns = null,
    string[] UserGroups = null,
    string[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationalUnitArns">OrganizationalUnitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationArns">OrganizationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userGroups">UserGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userIds">UserIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}. |

---

##### `OrganizationalUnitArns`<sup>Optional</sup> <a name="OrganizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationalUnitArns"></a>

```csharp
public string[] OrganizationalUnitArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}.

---

##### `OrganizationArns`<sup>Optional</sup> <a name="OrganizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationArns"></a>

```csharp
public string[] OrganizationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}.

---

##### `UserGroups`<sup>Optional</sup> <a name="UserGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userGroups"></a>

```csharp
public string[] UserGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}.

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userIds"></a>

```csharp
public string[] UserIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}.

---

### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration {
    ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository TargetRepository,
    string[] ContainerTags = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.targetRepository"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository TargetRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}

---

##### `ContainerTags`<sup>Optional</sup> <a name="ContainerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
    string RepositoryName,
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}. |

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}.

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration {
    string AccountId,
    object Enabled,
    ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate LaunchTemplate = null,
    double MaxParallelLaunches = null,
    ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration SnapshotConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.maxParallelLaunches">MaxParallelLaunches</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.snapshotConfiguration">SnapshotConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | snapshot_configuration block. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.launchTemplate"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template ImagebuilderDistributionConfiguration#launch_template}

---

##### `MaxParallelLaunches`<sup>Optional</sup> <a name="MaxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.maxParallelLaunches"></a>

```csharp
public double MaxParallelLaunches { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}.

---

##### `SnapshotConfiguration`<sup>Optional</sup> <a name="SnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.snapshotConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration SnapshotConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

snapshot_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#snapshot_configuration ImagebuilderDistributionConfiguration#snapshot_configuration}

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string LaunchTemplateVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateVersion">LaunchTemplateVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}.

---

##### `LaunchTemplateVersion`<sup>Optional</sup> <a name="LaunchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateVersion"></a>

```csharp
public string LaunchTemplateVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}.

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration {
    double TargetResourceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.property.targetResourceCount">TargetResourceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}. |

---

##### `TargetResourceCount`<sup>Optional</sup> <a name="TargetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.property.targetResourceCount"></a>

```csharp
public double TargetResourceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}.

---

### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration {
    string LaunchTemplateId,
    string AccountId = null,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#default ImagebuilderDistributionConfiguration#default}. |

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#default ImagebuilderDistributionConfiguration#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationalUnitArns">ResetOrganizationalUnitArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationArns">ResetOrganizationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserGroups">ResetUserGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnitArns` <a name="ResetOrganizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationalUnitArns"></a>

```csharp
private void ResetOrganizationalUnitArns()
```

##### `ResetOrganizationArns` <a name="ResetOrganizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationArns"></a>

```csharp
private void ResetOrganizationArns()
```

##### `ResetUserGroups` <a name="ResetUserGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserGroups"></a>

```csharp
private void ResetUserGroups()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserIds"></a>

```csharp
private void ResetUserIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArnsInput">OrganizationalUnitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArnsInput">OrganizationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroupsInput">UserGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIdsInput">UserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns">OrganizationalUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns">OrganizationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups">UserGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds">UserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationalUnitArnsInput`<sup>Optional</sup> <a name="OrganizationalUnitArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArnsInput"></a>

```csharp
public string[] OrganizationalUnitArnsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationArnsInput`<sup>Optional</sup> <a name="OrganizationArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArnsInput"></a>

```csharp
public string[] OrganizationArnsInput { get; }
```

- *Type:* string[]

---

##### `UserGroupsInput`<sup>Optional</sup> <a name="UserGroupsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroupsInput"></a>

```csharp
public string[] UserGroupsInput { get; }
```

- *Type:* string[]

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIdsInput"></a>

```csharp
public string[] UserIdsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnitArns`<sup>Required</sup> <a name="OrganizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns"></a>

```csharp
public string[] OrganizationalUnitArns { get; }
```

- *Type:* string[]

---

##### `OrganizationArns`<sup>Required</sup> <a name="OrganizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns"></a>

```csharp
public string[] OrganizationArns { get; }
```

- *Type:* string[]

---

##### `UserGroups`<sup>Required</sup> <a name="UserGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups"></a>

```csharp
public string[] UserGroups { get; }
```

- *Type:* string[]

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds"></a>

```csharp
public string[] UserIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---


### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission">PutLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetAmiTags">ResetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetLaunchPermission">ResetLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetTargetAccountIds">ResetTargetAccountIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchPermission` <a name="PutLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission"></a>

```csharp
private void PutLaunchPermission(ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---

##### `ResetAmiTags` <a name="ResetAmiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetAmiTags"></a>

```csharp
private void ResetAmiTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLaunchPermission` <a name="ResetLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetLaunchPermission"></a>

```csharp
private void ResetLaunchPermission()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetAccountIds` <a name="ResetTargetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetTargetAccountIds"></a>

```csharp
private void ResetTargetAccountIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission">LaunchPermission</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTagsInput">AmiTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermissionInput">LaunchPermissionInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput">TargetAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags">AmiTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds">TargetAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchPermission`<sup>Required</sup> <a name="LaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference LaunchPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference</a>

---

##### `AmiTagsInput`<sup>Optional</sup> <a name="AmiTagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LaunchPermissionInput`<sup>Optional</sup> <a name="LaunchPermissionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermissionInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission LaunchPermissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetAccountIdsInput`<sup>Optional</sup> <a name="TargetAccountIdsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput"></a>

```csharp
public string[] TargetAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `AmiTags`<sup>Required</sup> <a name="AmiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AmiTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetAccountIds`<sup>Required</sup> <a name="TargetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```csharp
public string[] TargetAccountIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository">PutTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetContainerTags">ResetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetRepository` <a name="PutTargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository"></a>

```csharp
private void PutTargetRepository(ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---

##### `ResetContainerTags` <a name="ResetContainerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetContainerTags"></a>

```csharp
private void ResetContainerTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTagsInput">ContainerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepositoryInput">TargetRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference TargetRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTagsInput"></a>

```csharp
public string[] ContainerTagsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TargetRepositoryInput`<sup>Optional</sup> <a name="TargetRepositoryInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepositoryInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository TargetRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateVersion">ResetLaunchTemplateVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetLaunchTemplateVersion` <a name="ResetLaunchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateVersion"></a>

```csharp
private void ResetLaunchTemplateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersionInput">LaunchTemplateVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion">LaunchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateVersionInput`<sup>Optional</sup> <a name="LaunchTemplateVersionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersionInput"></a>

```csharp
public string LaunchTemplateVersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `LaunchTemplateVersion`<sup>Required</sup> <a name="LaunchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```csharp
public string LaunchTemplateVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration">PutSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetMaxParallelLaunches">ResetMaxParallelLaunches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetSnapshotConfiguration">ResetSnapshotConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---

##### `PutSnapshotConfiguration` <a name="PutSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration"></a>

```csharp
private void PutSnapshotConfiguration(ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetMaxParallelLaunches` <a name="ResetMaxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetMaxParallelLaunches"></a>

```csharp
private void ResetMaxParallelLaunches()
```

##### `ResetSnapshotConfiguration` <a name="ResetSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetSnapshotConfiguration"></a>

```csharp
private void ResetSnapshotConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration">SnapshotConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunchesInput">MaxParallelLaunchesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfigurationInput">SnapshotConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches">MaxParallelLaunches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference</a>

---

##### `SnapshotConfiguration`<sup>Required</sup> <a name="SnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference SnapshotConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplateInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---

##### `MaxParallelLaunchesInput`<sup>Optional</sup> <a name="MaxParallelLaunchesInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunchesInput"></a>

```csharp
public double MaxParallelLaunchesInput { get; }
```

- *Type:* double

---

##### `SnapshotConfigurationInput`<sup>Optional</sup> <a name="SnapshotConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfigurationInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration SnapshotConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `MaxParallelLaunches`<sup>Required</sup> <a name="MaxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches"></a>

```csharp
public double MaxParallelLaunches { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resetTargetResourceCount">ResetTargetResourceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetResourceCount` <a name="ResetTargetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resetTargetResourceCount"></a>

```csharp
private void ResetTargetResourceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCountInput">TargetResourceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount">TargetResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetResourceCountInput`<sup>Optional</sup> <a name="TargetResourceCountInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCountInput"></a>

```csharp
public double TargetResourceCountInput { get; }
```

- *Type:* double

---

##### `TargetResourceCount`<sup>Required</sup> <a name="TargetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```csharp
public double TargetResourceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderDistributionConfigurationDistributionList <a name="ImagebuilderDistributionConfigurationDistributionList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get"></a>

```csharp
private ImagebuilderDistributionConfigurationDistributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImagebuilderDistributionConfigurationDistributionOutputReference <a name="ImagebuilderDistributionConfigurationDistributionOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ImagebuilderDistributionConfigurationDistributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration">PutAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration">PutContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration">PutFastLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration">PutLaunchTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetAmiDistributionConfiguration">ResetAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetContainerDistributionConfiguration">ResetContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetFastLaunchConfiguration">ResetFastLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLaunchTemplateConfiguration">ResetLaunchTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLicenseConfigurationArns">ResetLicenseConfigurationArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmiDistributionConfiguration` <a name="PutAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration"></a>

```csharp
private void PutAmiDistributionConfiguration(ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---

##### `PutContainerDistributionConfiguration` <a name="PutContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration"></a>

```csharp
private void PutContainerDistributionConfiguration(ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---

##### `PutFastLaunchConfiguration` <a name="PutFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration"></a>

```csharp
private void PutFastLaunchConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchTemplateConfiguration` <a name="PutLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration"></a>

```csharp
private void PutLaunchTemplateConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAmiDistributionConfiguration` <a name="ResetAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetAmiDistributionConfiguration"></a>

```csharp
private void ResetAmiDistributionConfiguration()
```

##### `ResetContainerDistributionConfiguration` <a name="ResetContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetContainerDistributionConfiguration"></a>

```csharp
private void ResetContainerDistributionConfiguration()
```

##### `ResetFastLaunchConfiguration` <a name="ResetFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetFastLaunchConfiguration"></a>

```csharp
private void ResetFastLaunchConfiguration()
```

##### `ResetLaunchTemplateConfiguration` <a name="ResetLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLaunchTemplateConfiguration"></a>

```csharp
private void ResetLaunchTemplateConfiguration()
```

##### `ResetLicenseConfigurationArns` <a name="ResetLicenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLicenseConfigurationArns"></a>

```csharp
private void ResetLicenseConfigurationArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration">AmiDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration">ContainerDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration">FastLaunchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration">LaunchTemplateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfigurationInput">AmiDistributionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfigurationInput">ContainerDistributionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfigurationInput">FastLaunchConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfigurationInput">LaunchTemplateConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArnsInput">LicenseConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiDistributionConfiguration`<sup>Required</sup> <a name="AmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference AmiDistributionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference</a>

---

##### `ContainerDistributionConfiguration`<sup>Required</sup> <a name="ContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference ContainerDistributionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference</a>

---

##### `FastLaunchConfiguration`<sup>Required</sup> <a name="FastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList FastLaunchConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a>

---

##### `LaunchTemplateConfiguration`<sup>Required</sup> <a name="LaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList LaunchTemplateConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a>

---

##### `AmiDistributionConfigurationInput`<sup>Optional</sup> <a name="AmiDistributionConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfigurationInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration AmiDistributionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---

##### `ContainerDistributionConfigurationInput`<sup>Optional</sup> <a name="ContainerDistributionConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfigurationInput"></a>

```csharp
public ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration ContainerDistributionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---

##### `FastLaunchConfigurationInput`<sup>Optional</sup> <a name="FastLaunchConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfigurationInput"></a>

```csharp
public object FastLaunchConfigurationInput { get; }
```

- *Type:* object

---

##### `LaunchTemplateConfigurationInput`<sup>Optional</sup> <a name="LaunchTemplateConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfigurationInput"></a>

```csharp
public object LaunchTemplateConfigurationInput { get; }
```

- *Type:* object

---

##### `LicenseConfigurationArnsInput`<sup>Optional</sup> <a name="LicenseConfigurationArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArnsInput"></a>

```csharp
public string[] LicenseConfigurationArnsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArns`<sup>Required</sup> <a name="LicenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns"></a>

```csharp
public string[] LicenseConfigurationArns { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



