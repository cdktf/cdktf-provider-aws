# `evidentlyProject` Submodule <a name="`evidentlyProject` Submodule" id="@cdktf/provider-aws.evidentlyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyProject <a name="EvidentlyProject" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_project aws_evidently_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProject(Construct Scope, string Id, EvidentlyProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig">EvidentlyProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig">EvidentlyProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery">PutDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery">ResetDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDataDelivery` <a name="PutDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery"></a>

```csharp
private void PutDataDelivery(EvidentlyProjectDataDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts"></a>

```csharp
private void PutTimeouts(EvidentlyProjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

---

##### `ResetDataDelivery` <a name="ResetDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDataDelivery"></a>

```csharp
private void ResetDataDelivery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount">ActiveExperimentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount">ActiveLaunchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery">DataDelivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount">ExperimentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount">FeatureCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount">LaunchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput">DataDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveExperimentCount`<sup>Required</sup> <a name="ActiveExperimentCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeExperimentCount"></a>

```csharp
public double ActiveExperimentCount { get; }
```

- *Type:* double

---

##### `ActiveLaunchCount`<sup>Required</sup> <a name="ActiveLaunchCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.activeLaunchCount"></a>

```csharp
public double ActiveLaunchCount { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DataDelivery`<sup>Required</sup> <a name="DataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDelivery"></a>

```csharp
public EvidentlyProjectDataDeliveryOutputReference DataDelivery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a>

---

##### `ExperimentCount`<sup>Required</sup> <a name="ExperimentCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.experimentCount"></a>

```csharp
public double ExperimentCount { get; }
```

- *Type:* double

---

##### `FeatureCount`<sup>Required</sup> <a name="FeatureCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.featureCount"></a>

```csharp
public double FeatureCount { get; }
```

- *Type:* double

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `LaunchCount`<sup>Required</sup> <a name="LaunchCount" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.launchCount"></a>

```csharp
public double LaunchCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeouts"></a>

```csharp
public EvidentlyProjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference">EvidentlyProjectTimeoutsOutputReference</a>

---

##### `DataDeliveryInput`<sup>Optional</sup> <a name="DataDeliveryInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.dataDeliveryInput"></a>

```csharp
public EvidentlyProjectDataDelivery DataDeliveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyProjectConfig <a name="EvidentlyProjectConfig" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    EvidentlyProjectDataDelivery DataDelivery = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EvidentlyProjectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery">DataDelivery</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | data_delivery block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#name EvidentlyProject#name}.

---

##### `DataDelivery`<sup>Optional</sup> <a name="DataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery"></a>

```csharp
public EvidentlyProjectDataDelivery DataDelivery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

data_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#description EvidentlyProject#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#id EvidentlyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags EvidentlyProject#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#tags_all EvidentlyProject#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectConfig.property.timeouts"></a>

```csharp
public EvidentlyProjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts">EvidentlyProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#timeouts EvidentlyProject#timeouts}

---

### EvidentlyProjectDataDelivery <a name="EvidentlyProjectDataDelivery" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDelivery {
    EvidentlyProjectDataDeliveryCloudwatchLogs CloudwatchLogs = null,
    EvidentlyProjectDataDeliveryS3Destination S3Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | s3_destination block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.cloudwatchLogs"></a>

```csharp
public EvidentlyProjectDataDeliveryCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#cloudwatch_logs EvidentlyProject#cloudwatch_logs}

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery.property.s3Destination"></a>

```csharp
public EvidentlyProjectDataDeliveryS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#s3_destination EvidentlyProject#s3_destination}

---

### EvidentlyProjectDataDeliveryCloudwatchLogs <a name="EvidentlyProjectDataDeliveryCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDeliveryCloudwatchLogs {
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#log_group EvidentlyProject#log_group}.

---

### EvidentlyProjectDataDeliveryS3Destination <a name="EvidentlyProjectDataDeliveryS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDeliveryS3Destination {
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#bucket EvidentlyProject#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#prefix EvidentlyProject#prefix}.

---

### EvidentlyProjectTimeouts <a name="EvidentlyProjectTimeouts" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#create EvidentlyProject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#delete EvidentlyProject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_project#update EvidentlyProject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference <a name="EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public EvidentlyProjectDataDeliveryCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---


### EvidentlyProjectDataDeliveryOutputReference <a name="EvidentlyProjectDataDeliveryOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(EvidentlyProjectDataDeliveryCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination"></a>

```csharp
private void PutS3Destination(EvidentlyProjectDataDeliveryS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3Destination"></a>

```csharp
private void ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogs"></a>

```csharp
public EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference">EvidentlyProjectDataDeliveryCloudwatchLogsOutputReference</a>

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Destination"></a>

```csharp
public EvidentlyProjectDataDeliveryS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference">EvidentlyProjectDataDeliveryS3DestinationOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public EvidentlyProjectDataDeliveryCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryCloudwatchLogs">EvidentlyProjectDataDeliveryCloudwatchLogs</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3DestinationInput"></a>

```csharp
public EvidentlyProjectDataDeliveryS3Destination S3DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue"></a>

```csharp
public EvidentlyProjectDataDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---


### EvidentlyProjectDataDeliveryS3DestinationOutputReference <a name="EvidentlyProjectDataDeliveryS3DestinationOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectDataDeliveryS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3DestinationOutputReference.property.internalValue"></a>

```csharp
public EvidentlyProjectDataDeliveryS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectDataDeliveryS3Destination">EvidentlyProjectDataDeliveryS3Destination</a>

---


### EvidentlyProjectTimeoutsOutputReference <a name="EvidentlyProjectTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyProjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyProject.EvidentlyProjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



