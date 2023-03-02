# `redshiftScheduledAction` Submodule <a name="`redshiftScheduledAction` Submodule" id="@cdktf/provider-aws.redshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftScheduledAction <a name="RedshiftScheduledAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action aws_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledAction(Construct Scope, string Id, RedshiftScheduledActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction">PutTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTargetAction` <a name="PutTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction"></a>

```csharp
private void PutTargetAction(RedshiftScheduledActionTargetAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftScheduledAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftScheduledAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftScheduledAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction">TargetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput">IamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput">TargetActionInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole">IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetAction`<sup>Required</sup> <a name="TargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction"></a>

```csharp
public RedshiftScheduledActionTargetActionOutputReference TargetAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `IamRoleInput`<sup>Optional</sup> <a name="IamRoleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput"></a>

```csharp
public string IamRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TargetActionInput`<sup>Optional</sup> <a name="TargetActionInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput"></a>

```csharp
public RedshiftScheduledActionTargetAction TargetActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole"></a>

```csharp
public string IamRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftScheduledActionConfig <a name="RedshiftScheduledActionConfig" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IamRole,
    string Name,
    string Schedule,
    RedshiftScheduledActionTargetAction TargetAction,
    string Description = null,
    object Enable = null,
    string EndTime = null,
    string Id = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole">IamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction">TargetAction</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | target_action block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole"></a>

```csharp
public string IamRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#name RedshiftScheduledAction#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}.

---

##### `TargetAction`<sup>Required</sup> <a name="TargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction"></a>

```csharp
public RedshiftScheduledActionTargetAction TargetAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

target_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#description RedshiftScheduledAction#description}.

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#enable RedshiftScheduledAction#enable}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#id RedshiftScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}.

---

### RedshiftScheduledActionTargetAction <a name="RedshiftScheduledActionTargetAction" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetAction {
    RedshiftScheduledActionTargetActionPauseCluster PauseCluster = null,
    RedshiftScheduledActionTargetActionResizeCluster ResizeCluster = null,
    RedshiftScheduledActionTargetActionResumeCluster ResumeCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster">PauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | pause_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster">ResizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | resize_cluster block. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster">ResumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | resume_cluster block. |

---

##### `PauseCluster`<sup>Optional</sup> <a name="PauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionPauseCluster PauseCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

pause_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}

---

##### `ResizeCluster`<sup>Optional</sup> <a name="ResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionResizeCluster ResizeCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

resize_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}

---

##### `ResumeCluster`<sup>Optional</sup> <a name="ResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionResumeCluster ResumeCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

resume_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}

---

### RedshiftScheduledActionTargetActionPauseCluster <a name="RedshiftScheduledActionTargetActionPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionPauseCluster {
    string ClusterIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

### RedshiftScheduledActionTargetActionResizeCluster <a name="RedshiftScheduledActionTargetActionResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionResizeCluster {
    string ClusterIdentifier,
    object Classic = null,
    string ClusterType = null,
    string NodeType = null,
    double NumberOfNodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic">Classic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType">ClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}. |

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

##### `Classic`<sup>Optional</sup> <a name="Classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic"></a>

```csharp
public object Classic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#classic RedshiftScheduledAction#classic}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}.

---

### RedshiftScheduledActionTargetActionResumeCluster <a name="RedshiftScheduledActionTargetActionResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionResumeCluster {
    string ClusterIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftScheduledActionTargetActionOutputReference <a name="RedshiftScheduledActionTargetActionOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster">PutPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster">PutResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster">PutResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster">ResetPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster">ResetResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster">ResetResumeCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPauseCluster` <a name="PutPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster"></a>

```csharp
private void PutPauseCluster(RedshiftScheduledActionTargetActionPauseCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `PutResizeCluster` <a name="PutResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster"></a>

```csharp
private void PutResizeCluster(RedshiftScheduledActionTargetActionResizeCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `PutResumeCluster` <a name="PutResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster"></a>

```csharp
private void PutResumeCluster(RedshiftScheduledActionTargetActionResumeCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `ResetPauseCluster` <a name="ResetPauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster"></a>

```csharp
private void ResetPauseCluster()
```

##### `ResetResizeCluster` <a name="ResetResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster"></a>

```csharp
private void ResetResizeCluster()
```

##### `ResetResumeCluster` <a name="ResetResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster"></a>

```csharp
private void ResetResumeCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">PauseCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">ResizeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">ResumeCluster</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput">PauseClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput">ResizeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput">ResumeClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseCluster`<sup>Required</sup> <a name="PauseCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionPauseClusterOutputReference PauseCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `ResizeCluster`<sup>Required</sup> <a name="ResizeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionResizeClusterOutputReference ResizeCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `ResumeCluster`<sup>Required</sup> <a name="ResumeCluster" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```csharp
public RedshiftScheduledActionTargetActionResumeClusterOutputReference ResumeCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `PauseClusterInput`<sup>Optional</sup> <a name="PauseClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput"></a>

```csharp
public RedshiftScheduledActionTargetActionPauseCluster PauseClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `ResizeClusterInput`<sup>Optional</sup> <a name="ResizeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput"></a>

```csharp
public RedshiftScheduledActionTargetActionResizeCluster ResizeClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `ResumeClusterInput`<sup>Optional</sup> <a name="ResumeClusterInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput"></a>

```csharp
public RedshiftScheduledActionTargetActionResumeCluster ResumeClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```csharp
public RedshiftScheduledActionTargetAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---


### RedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="RedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionPauseClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```csharp
public RedshiftScheduledActionTargetActionPauseCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---


### RedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionResizeClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic">ResetClassic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassic` <a name="ResetClassic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic"></a>

```csharp
private void ResetClassic()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType"></a>

```csharp
private void ResetClusterType()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType"></a>

```csharp
private void ResetNodeType()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes"></a>

```csharp
private void ResetNumberOfNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput">ClassicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">Classic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassicInput`<sup>Optional</sup> <a name="ClassicInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput"></a>

```csharp
public object ClassicInput { get; }
```

- *Type:* object

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput"></a>

```csharp
public double NumberOfNodesInput { get; }
```

- *Type:* double

---

##### `Classic`<sup>Required</sup> <a name="Classic" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```csharp
public object Classic { get; }
```

- *Type:* object

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```csharp
public double NumberOfNodes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```csharp
public RedshiftScheduledActionTargetActionResizeCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---


### RedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftScheduledActionTargetActionResumeClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```csharp
public RedshiftScheduledActionTargetActionResumeCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---



