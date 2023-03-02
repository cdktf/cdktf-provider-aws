# `autoscalingSchedule` Submodule <a name="`autoscalingSchedule` Submodule" id="@cdktf/provider-aws.autoscalingSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingSchedule <a name="AutoscalingSchedule" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule aws_autoscaling_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingSchedule(Construct Scope, string Id, AutoscalingScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig">AutoscalingScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig">AutoscalingScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AutoscalingSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput">AutoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput">RecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput">ScheduledActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence">Recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName">ScheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoscalingGroupNameInput`<sup>Optional</sup> <a name="AutoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput"></a>

```csharp
public string AutoscalingGroupNameInput { get; }
```

- *Type:* string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput"></a>

```csharp
public string RecurrenceInput { get; }
```

- *Type:* string

---

##### `ScheduledActionNameInput`<sup>Optional</sup> <a name="ScheduledActionNameInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput"></a>

```csharp
public string ScheduledActionNameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.recurrence"></a>

```csharp
public string Recurrence { get; }
```

- *Type:* string

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName"></a>

```csharp
public string ScheduledActionName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingScheduleConfig <a name="AutoscalingScheduleConfig" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AutoscalingScheduleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoscalingGroupName,
    string ScheduledActionName,
    double DesiredCapacity = null,
    string EndTime = null,
    string Id = null,
    double MaxSize = null,
    double MinSize = null,
    string Recurrence = null,
    string StartTime = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName">ScheduledActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence">Recurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName"></a>

```csharp
public string AutoscalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `ScheduledActionName`<sup>Required</sup> <a name="ScheduledActionName" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName"></a>

```csharp
public string ScheduledActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence"></a>

```csharp
public string Recurrence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-aws.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---



