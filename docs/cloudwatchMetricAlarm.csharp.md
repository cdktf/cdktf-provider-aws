# `cloudwatchMetricAlarm` Submodule <a name="`cloudwatchMetricAlarm` Submodule" id="@cdktf/provider-aws.cloudwatchMetricAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricAlarm <a name="CloudwatchMetricAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarm(Construct Scope, string Id, CloudwatchMetricAlarmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery">PutMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles">ResetEvaluateLowSampleCountPercentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic">ResetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery">ResetMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic">ResetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId">ResetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetricQuery` <a name="PutMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery"></a>

```csharp
private void PutMetricQuery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery.parameter.value"></a>

- *Type:* object

---

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled"></a>

```csharp
private void ResetActionsEnabled()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions"></a>

```csharp
private void ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription"></a>

```csharp
private void ResetAlarmDescription()
```

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm"></a>

```csharp
private void ResetDatapointsToAlarm()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetEvaluateLowSampleCountPercentiles` <a name="ResetEvaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles"></a>

```csharp
private void ResetEvaluateLowSampleCountPercentiles()
```

##### `ResetExtendedStatistic` <a name="ResetExtendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic"></a>

```csharp
private void ResetExtendedStatistic()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions"></a>

```csharp
private void ResetInsufficientDataActions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName"></a>

```csharp
private void ResetMetricName()
```

##### `ResetMetricQuery` <a name="ResetMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery"></a>

```csharp
private void ResetMetricQuery()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions"></a>

```csharp
private void ResetOkActions()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic"></a>

```csharp
private void ResetStatistic()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetThresholdMetricId` <a name="ResetThresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId"></a>

```csharp
private void ResetThresholdMetricId()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData"></a>

```csharp
private void ResetTreatMissingData()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit"></a>

```csharp
private void ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchMetricAlarm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchMetricAlarm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchMetricAlarm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery">MetricQuery</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput">EvaluateLowSampleCountPercentilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput">ExtendedStatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput">MetricQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput">ThresholdMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles">EvaluateLowSampleCountPercentiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic">ExtendedStatistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions">OkActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit">Unit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MetricQuery`<sup>Required</sup> <a name="MetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryList MetricQuery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a>

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput"></a>

```csharp
public object ActionsEnabledInput { get; }
```

- *Type:* object

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput"></a>

```csharp
public string[] AlarmActionsInput { get; }
```

- *Type:* string[]

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput"></a>

```csharp
public string AlarmDescriptionInput { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput"></a>

```csharp
public double DatapointsToAlarmInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EvaluateLowSampleCountPercentilesInput`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentilesInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput"></a>

```csharp
public string EvaluateLowSampleCountPercentilesInput { get; }
```

- *Type:* string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `ExtendedStatisticInput`<sup>Optional</sup> <a name="ExtendedStatisticInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput"></a>

```csharp
public string ExtendedStatisticInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput"></a>

```csharp
public string[] InsufficientDataActionsInput { get; }
```

- *Type:* string[]

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MetricQueryInput`<sup>Optional</sup> <a name="MetricQueryInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput"></a>

```csharp
public object MetricQueryInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput"></a>

```csharp
public string[] OkActionsInput { get; }
```

- *Type:* string[]

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdMetricIdInput`<sup>Optional</sup> <a name="ThresholdMetricIdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput"></a>

```csharp
public string ThresholdMetricIdInput { get; }
```

- *Type:* string

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput"></a>

```csharp
public string TreatMissingDataInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled"></a>

```csharp
public object ActionsEnabled { get; }
```

- *Type:* object

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; }
```

- *Type:* string[]

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; }
```

- *Type:* double

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EvaluateLowSampleCountPercentiles`<sup>Required</sup> <a name="EvaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles"></a>

```csharp
public string EvaluateLowSampleCountPercentiles { get; }
```

- *Type:* string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `ExtendedStatistic`<sup>Required</sup> <a name="ExtendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic"></a>

```csharp
public string ExtendedStatistic { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; }
```

- *Type:* string[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions"></a>

```csharp
public string[] OkActions { get; }
```

- *Type:* string[]

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdMetricId`<sup>Required</sup> <a name="ThresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId"></a>

```csharp
public string ThresholdMetricId { get; }
```

- *Type:* string

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricAlarmConfig <a name="CloudwatchMetricAlarmConfig" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AlarmName,
    string ComparisonOperator,
    double EvaluationPeriods,
    object ActionsEnabled = null,
    string[] AlarmActions = null,
    string AlarmDescription = null,
    double DatapointsToAlarm = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string EvaluateLowSampleCountPercentiles = null,
    string ExtendedStatistic = null,
    string Id = null,
    string[] InsufficientDataActions = null,
    string MetricName = null,
    object MetricQuery = null,
    string Namespace = null,
    string[] OkActions = null,
    double Period = null,
    string Statistic = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double Threshold = null,
    string ThresholdMetricId = null,
    string TreatMissingData = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName">AlarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles">EvaluateLowSampleCountPercentiles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic">ExtendedStatistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery">MetricQuery</a></code> | <code>object</code> | metric_query block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions">OkActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled"></a>

```csharp
public object ActionsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `EvaluateLowSampleCountPercentiles`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentiles" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles"></a>

```csharp
public string EvaluateLowSampleCountPercentiles { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `ExtendedStatistic`<sup>Optional</sup> <a name="ExtendedStatistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic"></a>

```csharp
public string ExtendedStatistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `MetricQuery`<sup>Optional</sup> <a name="MetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery"></a>

```csharp
public object MetricQuery { get; set; }
```

- *Type:* object

metric_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions"></a>

```csharp
public string[] OkActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `ThresholdMetricId`<sup>Optional</sup> <a name="ThresholdMetricId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId"></a>

```csharp
public string ThresholdMetricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

### CloudwatchMetricAlarmMetricQuery <a name="CloudwatchMetricAlarmMetricQuery" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmMetricQuery {
    string Id,
    string AccountId = null,
    string Expression = null,
    string Label = null,
    CloudwatchMetricAlarmMetricQueryMetric Metric = null,
    object ReturnData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData">ReturnData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}

---

##### `ReturnData`<sup>Optional</sup> <a name="ReturnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData"></a>

```csharp
public object ReturnData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}.

---

### CloudwatchMetricAlarmMetricQueryMetric <a name="CloudwatchMetricAlarmMetricQueryMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryMetric {
    string MetricName,
    double Period,
    string Stat,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string Namespace = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat">Stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat"></a>

```csharp
public string Stat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricAlarmMetricQueryList <a name="CloudwatchMetricAlarmMetricQueryList" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get"></a>

```csharp
private CloudwatchMetricAlarmMetricQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchMetricAlarmMetricQueryMetricOutputReference <a name="CloudwatchMetricAlarmMetricQueryMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput">StatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat">Stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput"></a>

```csharp
public string StatInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat"></a>

```csharp
public string Stat { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---


### CloudwatchMetricAlarmMetricQueryOutputReference <a name="CloudwatchMetricAlarmMetricQueryOutputReference" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData">ResetReturnData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric"></a>

```csharp
private void PutMetric(CloudwatchMetricAlarmMetricQueryMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetReturnData` <a name="ResetReturnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData"></a>

```csharp
private void ResetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput">ReturnDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData">ReturnData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `ReturnDataInput`<sup>Optional</sup> <a name="ReturnDataInput" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput"></a>

```csharp
public object ReturnDataInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData"></a>

```csharp
public object ReturnData { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



