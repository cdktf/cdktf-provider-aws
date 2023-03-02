# `mediaConvertQueue` Submodule <a name="`mediaConvertQueue` Submodule" id="@cdktf/provider-aws.mediaConvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaConvertQueue <a name="MediaConvertQueue" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue aws_media_convert_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MediaConvertQueue(Construct Scope, string Id, MediaConvertQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings">PutReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings">ResetReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutReservationPlanSettings` <a name="PutReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings"></a>

```csharp
private void PutReservationPlanSettings(MediaConvertQueueReservationPlanSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan"></a>

```csharp
private void ResetPricingPlan()
```

##### `ResetReservationPlanSettings` <a name="ResetReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings"></a>

```csharp
private void ResetReservationPlanSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MediaConvertQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MediaConvertQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MediaConvertQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput">PricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput">ReservationPlanSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ReservationPlanSettings`<sup>Required</sup> <a name="ReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings"></a>

```csharp
public MediaConvertQueueReservationPlanSettingsOutputReference ReservationPlanSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput"></a>

```csharp
public string PricingPlanInput { get; }
```

- *Type:* string

---

##### `ReservationPlanSettingsInput`<sup>Optional</sup> <a name="ReservationPlanSettingsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput"></a>

```csharp
public MediaConvertQueueReservationPlanSettings ReservationPlanSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaConvertQueueConfig <a name="MediaConvertQueueConfig" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MediaConvertQueueConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string PricingPlan = null,
    MediaConvertQueueReservationPlanSettings ReservationPlanSettings = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `ReservationPlanSettings`<sup>Optional</sup> <a name="ReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings"></a>

```csharp
public MediaConvertQueueReservationPlanSettings ReservationPlanSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

### MediaConvertQueueReservationPlanSettings <a name="MediaConvertQueueReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MediaConvertQueueReservationPlanSettings {
    string Commitment,
    string RenewalType,
    double ReservedSlots
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment">Commitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType">RenewalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots">ReservedSlots</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}. |

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment"></a>

```csharp
public string Commitment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType"></a>

```csharp
public string RenewalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots"></a>

```csharp
public double ReservedSlots { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertQueueReservationPlanSettingsOutputReference <a name="MediaConvertQueueReservationPlanSettingsOutputReference" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MediaConvertQueueReservationPlanSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput">CommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput">RenewalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput">ReservedSlotsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment">Commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType">RenewalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots">ReservedSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentInput`<sup>Optional</sup> <a name="CommitmentInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput"></a>

```csharp
public string CommitmentInput { get; }
```

- *Type:* string

---

##### `RenewalTypeInput`<sup>Optional</sup> <a name="RenewalTypeInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput"></a>

```csharp
public string RenewalTypeInput { get; }
```

- *Type:* string

---

##### `ReservedSlotsInput`<sup>Optional</sup> <a name="ReservedSlotsInput" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput"></a>

```csharp
public double ReservedSlotsInput { get; }
```

- *Type:* double

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment"></a>

```csharp
public string Commitment { get; }
```

- *Type:* string

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType"></a>

```csharp
public string RenewalType { get; }
```

- *Type:* string

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots"></a>

```csharp
public double ReservedSlots { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue"></a>

```csharp
public MediaConvertQueueReservationPlanSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---



