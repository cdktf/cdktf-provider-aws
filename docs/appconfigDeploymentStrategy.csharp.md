# `appconfigDeploymentStrategy` Submodule <a name="`appconfigDeploymentStrategy` Submodule" id="@cdktf/provider-aws.appconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeploymentStrategy <a name="AppconfigDeploymentStrategy" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy aws_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppconfigDeploymentStrategy(Construct Scope, string Id, AppconfigDeploymentStrategyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes">ResetFinalBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType">ResetGrowthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFinalBakeTimeInMinutes` <a name="ResetFinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes"></a>

```csharp
private void ResetFinalBakeTimeInMinutes()
```

##### `ResetGrowthType` <a name="ResetGrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType"></a>

```csharp
private void ResetGrowthType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppconfigDeploymentStrategy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppconfigDeploymentStrategy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppconfigDeploymentStrategy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput">DeploymentDurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput">FinalBakeTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput">GrowthFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput">GrowthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput">ReplicateToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType">GrowthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo">ReplicateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeploymentDurationInMinutesInput`<sup>Optional</sup> <a name="DeploymentDurationInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput"></a>

```csharp
public double DeploymentDurationInMinutesInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FinalBakeTimeInMinutesInput`<sup>Optional</sup> <a name="FinalBakeTimeInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput"></a>

```csharp
public double FinalBakeTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput"></a>

```csharp
public double GrowthFactorInput { get; }
```

- *Type:* double

---

##### `GrowthTypeInput`<sup>Optional</sup> <a name="GrowthTypeInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput"></a>

```csharp
public string GrowthTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicateToInput`<sup>Optional</sup> <a name="ReplicateToInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput"></a>

```csharp
public string ReplicateToInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```csharp
public double DeploymentDurationInMinutes { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FinalBakeTimeInMinutes`<sup>Required</sup> <a name="FinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```csharp
public double FinalBakeTimeInMinutes { get; }
```

- *Type:* double

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; }
```

- *Type:* double

---

##### `GrowthType`<sup>Required</sup> <a name="GrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType"></a>

```csharp
public string GrowthType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo"></a>

```csharp
public string ReplicateTo { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentStrategyConfig <a name="AppconfigDeploymentStrategyConfig" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppconfigDeploymentStrategyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double DeploymentDurationInMinutes,
    double GrowthFactor,
    string Name,
    string ReplicateTo,
    string Description = null,
    double FinalBakeTimeInMinutes = null,
    string GrowthType = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor">GrowthFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo">ReplicateTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType">GrowthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes"></a>

```csharp
public double DeploymentDurationInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}.

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor"></a>

```csharp
public double GrowthFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}.

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo"></a>

```csharp
public string ReplicateTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}.

---

##### `FinalBakeTimeInMinutes`<sup>Optional</sup> <a name="FinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes"></a>

```csharp
public double FinalBakeTimeInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}.

---

##### `GrowthType`<sup>Optional</sup> <a name="GrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType"></a>

```csharp
public string GrowthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}.

---



