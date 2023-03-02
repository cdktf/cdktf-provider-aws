# `cloudwatchEventTarget` Submodule <a name="`cloudwatchEventTarget` Submodule" id="@cdktf/provider-aws.cloudwatchEventTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventTarget <a name="CloudwatchEventTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target aws_cloudwatch_event_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTarget(Construct Scope, string Id, CloudwatchEventTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig">CloudwatchEventTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig">CloudwatchEventTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget">PutBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig">PutDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget">PutEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer">PutInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget">PutKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget">PutRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets">PutRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget">PutSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget">ResetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig">ResetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget">ResetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName">ResetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath">ResetInputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer">ResetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget">ResetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget">ResetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets">ResetRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget">ResetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBatchTarget` <a name="PutBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget"></a>

```csharp
private void PutBatchTarget(CloudwatchEventTargetBatchTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `PutDeadLetterConfig` <a name="PutDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig"></a>

```csharp
private void PutDeadLetterConfig(CloudwatchEventTargetDeadLetterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `PutEcsTarget` <a name="PutEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget"></a>

```csharp
private void PutEcsTarget(CloudwatchEventTargetEcsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget"></a>

```csharp
private void PutHttpTarget(CloudwatchEventTargetHttpTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `PutInputTransformer` <a name="PutInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer"></a>

```csharp
private void PutInputTransformer(CloudwatchEventTargetInputTransformer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `PutKinesisTarget` <a name="PutKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget"></a>

```csharp
private void PutKinesisTarget(CloudwatchEventTargetKinesisTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `PutRedshiftTarget` <a name="PutRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget"></a>

```csharp
private void PutRedshiftTarget(CloudwatchEventTargetRedshiftTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(CloudwatchEventTargetRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `PutRunCommandTargets` <a name="PutRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets"></a>

```csharp
private void PutRunCommandTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets.parameter.value"></a>

- *Type:* object

---

##### `PutSqsTarget` <a name="PutSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget"></a>

```csharp
private void PutSqsTarget(CloudwatchEventTargetSqsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `ResetBatchTarget` <a name="ResetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget"></a>

```csharp
private void ResetBatchTarget()
```

##### `ResetDeadLetterConfig` <a name="ResetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig"></a>

```csharp
private void ResetDeadLetterConfig()
```

##### `ResetEcsTarget` <a name="ResetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget"></a>

```csharp
private void ResetEcsTarget()
```

##### `ResetEventBusName` <a name="ResetEventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName"></a>

```csharp
private void ResetEventBusName()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget"></a>

```csharp
private void ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetInputPath` <a name="ResetInputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath"></a>

```csharp
private void ResetInputPath()
```

##### `ResetInputTransformer` <a name="ResetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer"></a>

```csharp
private void ResetInputTransformer()
```

##### `ResetKinesisTarget` <a name="ResetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget"></a>

```csharp
private void ResetKinesisTarget()
```

##### `ResetRedshiftTarget` <a name="ResetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget"></a>

```csharp
private void ResetRedshiftTarget()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRunCommandTargets` <a name="ResetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets"></a>

```csharp
private void ResetRunCommandTargets()
```

##### `ResetSqsTarget` <a name="ResetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget"></a>

```csharp
private void ResetSqsTarget()
```

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget">BatchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget">EcsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer">InputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget">KinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget">RedshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets">RunCommandTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget">SqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput">BatchTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput">DeadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput">EcsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput">EventBusNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput">InputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput">InputTransformerInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput">KinesisTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput">RedshiftTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput">RunCommandTargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput">SqsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName">EventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath">InputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BatchTarget`<sup>Required</sup> <a name="BatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget"></a>

```csharp
public CloudwatchEventTargetBatchTargetOutputReference BatchTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a>

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig"></a>

```csharp
public CloudwatchEventTargetDeadLetterConfigOutputReference DeadLetterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a>

---

##### `EcsTarget`<sup>Required</sup> <a name="EcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget"></a>

```csharp
public CloudwatchEventTargetEcsTargetOutputReference EcsTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget"></a>

```csharp
public CloudwatchEventTargetHttpTargetOutputReference HttpTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a>

---

##### `InputTransformer`<sup>Required</sup> <a name="InputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer"></a>

```csharp
public CloudwatchEventTargetInputTransformerOutputReference InputTransformer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a>

---

##### `KinesisTarget`<sup>Required</sup> <a name="KinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget"></a>

```csharp
public CloudwatchEventTargetKinesisTargetOutputReference KinesisTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a>

---

##### `RedshiftTarget`<sup>Required</sup> <a name="RedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget"></a>

```csharp
public CloudwatchEventTargetRedshiftTargetOutputReference RedshiftTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy"></a>

```csharp
public CloudwatchEventTargetRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a>

---

##### `RunCommandTargets`<sup>Required</sup> <a name="RunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets"></a>

```csharp
public CloudwatchEventTargetRunCommandTargetsList RunCommandTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a>

---

##### `SqsTarget`<sup>Required</sup> <a name="SqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget"></a>

```csharp
public CloudwatchEventTargetSqsTargetOutputReference SqsTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `BatchTargetInput`<sup>Optional</sup> <a name="BatchTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput"></a>

```csharp
public CloudwatchEventTargetBatchTarget BatchTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `DeadLetterConfigInput`<sup>Optional</sup> <a name="DeadLetterConfigInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput"></a>

```csharp
public CloudwatchEventTargetDeadLetterConfig DeadLetterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `EcsTargetInput`<sup>Optional</sup> <a name="EcsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput"></a>

```csharp
public CloudwatchEventTargetEcsTarget EcsTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `EventBusNameInput`<sup>Optional</sup> <a name="EventBusNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput"></a>

```csharp
public string EventBusNameInput { get; }
```

- *Type:* string

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput"></a>

```csharp
public CloudwatchEventTargetHttpTarget HttpTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `InputPathInput`<sup>Optional</sup> <a name="InputPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput"></a>

```csharp
public string InputPathInput { get; }
```

- *Type:* string

---

##### `InputTransformerInput`<sup>Optional</sup> <a name="InputTransformerInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput"></a>

```csharp
public CloudwatchEventTargetInputTransformer InputTransformerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `KinesisTargetInput`<sup>Optional</sup> <a name="KinesisTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput"></a>

```csharp
public CloudwatchEventTargetKinesisTarget KinesisTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `RedshiftTargetInput`<sup>Optional</sup> <a name="RedshiftTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput"></a>

```csharp
public CloudwatchEventTargetRedshiftTarget RedshiftTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput"></a>

```csharp
public CloudwatchEventTargetRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `RunCommandTargetsInput`<sup>Optional</sup> <a name="RunCommandTargetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput"></a>

```csharp
public object RunCommandTargetsInput { get; }
```

- *Type:* object

---

##### `SqsTargetInput`<sup>Optional</sup> <a name="SqsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput"></a>

```csharp
public CloudwatchEventTargetSqsTarget SqsTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventBusName`<sup>Required</sup> <a name="EventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName"></a>

```csharp
public string EventBusName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `InputPath`<sup>Required</sup> <a name="InputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath"></a>

```csharp
public string InputPath { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventTargetBatchTarget <a name="CloudwatchEventTargetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetBatchTarget {
    string JobDefinition,
    string JobName,
    double ArraySize = null,
    double JobAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition">JobDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize">ArraySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts">JobAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}. |

---

##### `JobDefinition`<sup>Required</sup> <a name="JobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition"></a>

```csharp
public string JobDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}.

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}.

---

##### `ArraySize`<sup>Optional</sup> <a name="ArraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize"></a>

```csharp
public double ArraySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}.

---

##### `JobAttempts`<sup>Optional</sup> <a name="JobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts"></a>

```csharp
public double JobAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}.

---

### CloudwatchEventTargetConfig <a name="CloudwatchEventTargetConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn,
    string Rule,
    CloudwatchEventTargetBatchTarget BatchTarget = null,
    CloudwatchEventTargetDeadLetterConfig DeadLetterConfig = null,
    CloudwatchEventTargetEcsTarget EcsTarget = null,
    string EventBusName = null,
    CloudwatchEventTargetHttpTarget HttpTarget = null,
    string Id = null,
    string Input = null,
    string InputPath = null,
    CloudwatchEventTargetInputTransformer InputTransformer = null,
    CloudwatchEventTargetKinesisTarget KinesisTarget = null,
    CloudwatchEventTargetRedshiftTarget RedshiftTarget = null,
    CloudwatchEventTargetRetryPolicy RetryPolicy = null,
    string RoleArn = null,
    object RunCommandTargets = null,
    CloudwatchEventTargetSqsTarget SqsTarget = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule">Rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget">BatchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget">EcsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName">EventBusName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input">Input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath">InputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer">InputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget">KinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget">RedshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets">RunCommandTargets</a></code> | <code>object</code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget">SqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `BatchTarget`<sup>Optional</sup> <a name="BatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget"></a>

```csharp
public CloudwatchEventTargetBatchTarget BatchTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `DeadLetterConfig`<sup>Optional</sup> <a name="DeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig"></a>

```csharp
public CloudwatchEventTargetDeadLetterConfig DeadLetterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `EcsTarget`<sup>Optional</sup> <a name="EcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget"></a>

```csharp
public CloudwatchEventTargetEcsTarget EcsTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `EventBusName`<sup>Optional</sup> <a name="EventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName"></a>

```csharp
public string EventBusName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget"></a>

```csharp
public CloudwatchEventTargetHttpTarget HttpTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `InputPath`<sup>Optional</sup> <a name="InputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath"></a>

```csharp
public string InputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `InputTransformer`<sup>Optional</sup> <a name="InputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer"></a>

```csharp
public CloudwatchEventTargetInputTransformer InputTransformer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `KinesisTarget`<sup>Optional</sup> <a name="KinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget"></a>

```csharp
public CloudwatchEventTargetKinesisTarget KinesisTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `RedshiftTarget`<sup>Optional</sup> <a name="RedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget"></a>

```csharp
public CloudwatchEventTargetRedshiftTarget RedshiftTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy"></a>

```csharp
public CloudwatchEventTargetRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `RunCommandTargets`<sup>Optional</sup> <a name="RunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets"></a>

```csharp
public object RunCommandTargets { get; set; }
```

- *Type:* object

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `SqsTarget`<sup>Optional</sup> <a name="SqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget"></a>

```csharp
public CloudwatchEventTargetSqsTarget SqsTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

### CloudwatchEventTargetDeadLetterConfig <a name="CloudwatchEventTargetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetDeadLetterConfig {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

### CloudwatchEventTargetEcsTarget <a name="CloudwatchEventTargetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTarget {
    string TaskDefinitionArn,
    object CapacityProviderStrategy = null,
    object EnableEcsManagedTags = null,
    object EnableExecuteCommand = null,
    string Group = null,
    string LaunchType = null,
    CloudwatchEventTargetEcsTargetNetworkConfiguration NetworkConfiguration = null,
    object PlacementConstraint = null,
    string PlatformVersion = null,
    string PropagateTags = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double TaskCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code>object</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group">Group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType">LaunchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint">PlacementConstraint</a></code> | <code>object</code> | placement_constraint block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags">PropagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount">TaskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}. |

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}.

---

##### `CapacityProviderStrategy`<sup>Optional</sup> <a name="CapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy"></a>

```csharp
public object CapacityProviderStrategy { get; set; }
```

- *Type:* object

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}

---

##### `EnableEcsManagedTags`<sup>Optional</sup> <a name="EnableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags"></a>

```csharp
public object EnableEcsManagedTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}.

---

##### `EnableExecuteCommand`<sup>Optional</sup> <a name="EnableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand"></a>

```csharp
public object EnableExecuteCommand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}.

---

##### `LaunchType`<sup>Optional</sup> <a name="LaunchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType"></a>

```csharp
public string LaunchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration"></a>

```csharp
public CloudwatchEventTargetEcsTargetNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}

---

##### `PlacementConstraint`<sup>Optional</sup> <a name="PlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint"></a>

```csharp
public object PlacementConstraint { get; set; }
```

- *Type:* object

placement_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags"></a>

```csharp
public string PropagateTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}.

---

##### `TaskCount`<sup>Optional</sup> <a name="TaskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount"></a>

```csharp
public double TaskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}.

---

### CloudwatchEventTargetEcsTargetCapacityProviderStrategy <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetCapacityProviderStrategy {
    string CapacityProvider,
    double Base = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base">Base</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}.

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base"></a>

```csharp
public double Base { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}.

---

### CloudwatchEventTargetEcsTargetNetworkConfiguration <a name="CloudwatchEventTargetEcsTargetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetNetworkConfiguration {
    string[] Subnets,
    object AssignPublicIp = null,
    string[] SecurityGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}. |

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}.

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}.

---

### CloudwatchEventTargetEcsTargetPlacementConstraint <a name="CloudwatchEventTargetEcsTargetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetPlacementConstraint {
    string Type,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}.

---

### CloudwatchEventTargetHttpTarget <a name="CloudwatchEventTargetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetHttpTarget {
    System.Collections.Generic.IDictionary<string, string> HeaderParameters = null,
    string[] PathParameterValues = null,
    System.Collections.Generic.IDictionary<string, string> QueryStringParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters">HeaderParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues">PathParameterValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters">QueryStringParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}. |

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}.

---

##### `PathParameterValues`<sup>Optional</sup> <a name="PathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues"></a>

```csharp
public string[] PathParameterValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}.

---

### CloudwatchEventTargetInputTransformer <a name="CloudwatchEventTargetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetInputTransformer {
    string InputTemplate,
    System.Collections.Generic.IDictionary<string, string> InputPaths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate">InputTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths">InputPaths</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}. |

---

##### `InputTemplate`<sup>Required</sup> <a name="InputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate"></a>

```csharp
public string InputTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}.

---

##### `InputPaths`<sup>Optional</sup> <a name="InputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputPaths { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}.

---

### CloudwatchEventTargetKinesisTarget <a name="CloudwatchEventTargetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetKinesisTarget {
    string PartitionKeyPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}. |

---

##### `PartitionKeyPath`<sup>Optional</sup> <a name="PartitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}.

---

### CloudwatchEventTargetRedshiftTarget <a name="CloudwatchEventTargetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRedshiftTarget {
    string Database,
    string DbUser = null,
    string SecretsManagerArn = null,
    string Sql = null,
    string StatementName = null,
    object WithEvent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser">DbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName">StatementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent">WithEvent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}.

---

##### `DbUser`<sup>Optional</sup> <a name="DbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser"></a>

```csharp
public string DbUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}.

---

##### `SecretsManagerArn`<sup>Optional</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}.

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}.

---

##### `StatementName`<sup>Optional</sup> <a name="StatementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName"></a>

```csharp
public string StatementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}.

---

##### `WithEvent`<sup>Optional</sup> <a name="WithEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent"></a>

```csharp
public object WithEvent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}.

---

### CloudwatchEventTargetRetryPolicy <a name="CloudwatchEventTargetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRetryPolicy {
    double MaximumEventAgeInSeconds = null,
    double MaximumRetryAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}. |

---

##### `MaximumEventAgeInSeconds`<sup>Optional</sup> <a name="MaximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```csharp
public double MaximumEventAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.

---

##### `MaximumRetryAttempts`<sup>Optional</sup> <a name="MaximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.

---

### CloudwatchEventTargetRunCommandTargets <a name="CloudwatchEventTargetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRunCommandTargets {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}.

---

### CloudwatchEventTargetSqsTarget <a name="CloudwatchEventTargetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetSqsTarget {
    string MessageGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}. |

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventTargetBatchTargetOutputReference <a name="CloudwatchEventTargetBatchTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetBatchTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize">ResetArraySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts">ResetJobAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArraySize` <a name="ResetArraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize"></a>

```csharp
private void ResetArraySize()
```

##### `ResetJobAttempts` <a name="ResetJobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts"></a>

```csharp
private void ResetJobAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput">ArraySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput">JobAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput">JobDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize">ArraySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts">JobAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition">JobDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArraySizeInput`<sup>Optional</sup> <a name="ArraySizeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput"></a>

```csharp
public double ArraySizeInput { get; }
```

- *Type:* double

---

##### `JobAttemptsInput`<sup>Optional</sup> <a name="JobAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput"></a>

```csharp
public double JobAttemptsInput { get; }
```

- *Type:* double

---

##### `JobDefinitionInput`<sup>Optional</sup> <a name="JobDefinitionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput"></a>

```csharp
public string JobDefinitionInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `ArraySize`<sup>Required</sup> <a name="ArraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize"></a>

```csharp
public double ArraySize { get; }
```

- *Type:* double

---

##### `JobAttempts`<sup>Required</sup> <a name="JobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts"></a>

```csharp
public double JobAttempts { get; }
```

- *Type:* double

---

##### `JobDefinition`<sup>Required</sup> <a name="JobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition"></a>

```csharp
public string JobDefinition { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetBatchTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---


### CloudwatchEventTargetDeadLetterConfigOutputReference <a name="CloudwatchEventTargetDeadLetterConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetDeadLetterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetDeadLetterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyList <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get"></a>

```csharp
private CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase"></a>

```csharp
private void ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```csharp
public double BaseInput { get; }
```

- *Type:* double

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```csharp
public string CapacityProviderInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference <a name="CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetEcsTargetNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---


### CloudwatchEventTargetEcsTargetOutputReference <a name="CloudwatchEventTargetEcsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy">PutCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint">PutPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy">ResetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags">ResetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand">ResetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType">ResetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint">ResetPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount">ResetTaskCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityProviderStrategy` <a name="PutCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy"></a>

```csharp
private void PutCapacityProviderStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(CloudwatchEventTargetEcsTargetNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `PutPlacementConstraint` <a name="PutPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint"></a>

```csharp
private void PutPlacementConstraint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint.parameter.value"></a>

- *Type:* object

---

##### `ResetCapacityProviderStrategy` <a name="ResetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy"></a>

```csharp
private void ResetCapacityProviderStrategy()
```

##### `ResetEnableEcsManagedTags` <a name="ResetEnableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags"></a>

```csharp
private void ResetEnableEcsManagedTags()
```

##### `ResetEnableExecuteCommand` <a name="ResetEnableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand"></a>

```csharp
private void ResetEnableExecuteCommand()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetLaunchType` <a name="ResetLaunchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType"></a>

```csharp
private void ResetLaunchType()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetPlacementConstraint` <a name="ResetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint"></a>

```csharp
private void ResetPlacementConstraint()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion"></a>

```csharp
private void ResetPlatformVersion()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaskCount` <a name="ResetTaskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount"></a>

```csharp
private void ResetTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint">PlacementConstraint</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput">CapacityProviderStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput">EnableEcsManagedTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput">EnableExecuteCommandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput">LaunchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput">PlacementConstraintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput">TaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput">TaskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType">LaunchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount">TaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy"></a>

```csharp
public CloudwatchEventTargetEcsTargetCapacityProviderStrategyList CapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration"></a>

```csharp
public CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a>

---

##### `PlacementConstraint`<sup>Required</sup> <a name="PlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint"></a>

```csharp
public CloudwatchEventTargetEcsTargetPlacementConstraintList PlacementConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a>

---

##### `CapacityProviderStrategyInput`<sup>Optional</sup> <a name="CapacityProviderStrategyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput"></a>

```csharp
public object CapacityProviderStrategyInput { get; }
```

- *Type:* object

---

##### `EnableEcsManagedTagsInput`<sup>Optional</sup> <a name="EnableEcsManagedTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput"></a>

```csharp
public object EnableEcsManagedTagsInput { get; }
```

- *Type:* object

---

##### `EnableExecuteCommandInput`<sup>Optional</sup> <a name="EnableExecuteCommandInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput"></a>

```csharp
public object EnableExecuteCommandInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `LaunchTypeInput`<sup>Optional</sup> <a name="LaunchTypeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput"></a>

```csharp
public string LaunchTypeInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput"></a>

```csharp
public CloudwatchEventTargetEcsTargetNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `PlacementConstraintInput`<sup>Optional</sup> <a name="PlacementConstraintInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput"></a>

```csharp
public object PlacementConstraintInput { get; }
```

- *Type:* object

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput"></a>

```csharp
public string PropagateTagsInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskCountInput`<sup>Optional</sup> <a name="TaskCountInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput"></a>

```csharp
public double TaskCountInput { get; }
```

- *Type:* double

---

##### `TaskDefinitionArnInput`<sup>Optional</sup> <a name="TaskDefinitionArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput"></a>

```csharp
public string TaskDefinitionArnInput { get; }
```

- *Type:* string

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags"></a>

```csharp
public object EnableEcsManagedTags { get; }
```

- *Type:* object

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand"></a>

```csharp
public object EnableExecuteCommand { get; }
```

- *Type:* object

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType"></a>

```csharp
public string LaunchType { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount"></a>

```csharp
public double TaskCount { get; }
```

- *Type:* double

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetEcsTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---


### CloudwatchEventTargetEcsTargetPlacementConstraintList <a name="CloudwatchEventTargetEcsTargetPlacementConstraintList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetPlacementConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get"></a>

```csharp
private CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference <a name="CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetHttpTargetOutputReference <a name="CloudwatchEventTargetHttpTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetHttpTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues">ResetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters"></a>

```csharp
private void ResetHeaderParameters()
```

##### `ResetPathParameterValues` <a name="ResetPathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues"></a>

```csharp
private void ResetPathParameterValues()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters"></a>

```csharp
private void ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput">PathParameterValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters">HeaderParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues">PathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PathParameterValuesInput`<sup>Optional</sup> <a name="PathParameterValuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput"></a>

```csharp
public string[] PathParameterValuesInput { get; }
```

- *Type:* string[]

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeaderParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PathParameterValues`<sup>Required</sup> <a name="PathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues"></a>

```csharp
public string[] PathParameterValues { get; }
```

- *Type:* string[]

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryStringParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetHttpTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---


### CloudwatchEventTargetInputTransformerOutputReference <a name="CloudwatchEventTargetInputTransformerOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetInputTransformerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths">ResetInputPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputPaths` <a name="ResetInputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths"></a>

```csharp
private void ResetInputPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput">InputPathsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput">InputTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths">InputPaths</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate">InputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputPathsInput`<sup>Optional</sup> <a name="InputPathsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputPathsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InputTemplateInput`<sup>Optional</sup> <a name="InputTemplateInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput"></a>

```csharp
public string InputTemplateInput { get; }
```

- *Type:* string

---

##### `InputPaths`<sup>Required</sup> <a name="InputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputPaths { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InputTemplate`<sup>Required</sup> <a name="InputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate"></a>

```csharp
public string InputTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetInputTransformer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---


### CloudwatchEventTargetKinesisTargetOutputReference <a name="CloudwatchEventTargetKinesisTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetKinesisTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath">ResetPartitionKeyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPartitionKeyPath` <a name="ResetPartitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath"></a>

```csharp
private void ResetPartitionKeyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput">PartitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionKeyPathInput`<sup>Optional</sup> <a name="PartitionKeyPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput"></a>

```csharp
public string PartitionKeyPathInput { get; }
```

- *Type:* string

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetKinesisTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---


### CloudwatchEventTargetRedshiftTargetOutputReference <a name="CloudwatchEventTargetRedshiftTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRedshiftTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser">ResetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn">ResetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName">ResetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent">ResetWithEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbUser` <a name="ResetDbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser"></a>

```csharp
private void ResetDbUser()
```

##### `ResetSecretsManagerArn` <a name="ResetSecretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn"></a>

```csharp
private void ResetSecretsManagerArn()
```

##### `ResetSql` <a name="ResetSql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql"></a>

```csharp
private void ResetSql()
```

##### `ResetStatementName` <a name="ResetStatementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName"></a>

```csharp
private void ResetStatementName()
```

##### `ResetWithEvent` <a name="ResetWithEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent"></a>

```csharp
private void ResetWithEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput">DbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput">SecretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput">StatementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput">WithEventInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName">StatementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent">WithEvent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput"></a>

```csharp
public string DbUserInput { get; }
```

- *Type:* string

---

##### `SecretsManagerArnInput`<sup>Optional</sup> <a name="SecretsManagerArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput"></a>

```csharp
public string SecretsManagerArnInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `StatementNameInput`<sup>Optional</sup> <a name="StatementNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput"></a>

```csharp
public string StatementNameInput { get; }
```

- *Type:* string

---

##### `WithEventInput`<sup>Optional</sup> <a name="WithEventInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput"></a>

```csharp
public object WithEventInput { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `StatementName`<sup>Required</sup> <a name="StatementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName"></a>

```csharp
public string StatementName { get; }
```

- *Type:* string

---

##### `WithEvent`<sup>Required</sup> <a name="WithEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent"></a>

```csharp
public object WithEvent { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetRedshiftTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---


### CloudwatchEventTargetRetryPolicyOutputReference <a name="CloudwatchEventTargetRetryPolicyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">ResetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">ResetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumEventAgeInSeconds` <a name="ResetMaximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```csharp
private void ResetMaximumEventAgeInSeconds()
```

##### `ResetMaximumRetryAttempts` <a name="ResetMaximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```csharp
private void ResetMaximumRetryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">MaximumEventAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">MaximumRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaximumEventAgeInSecondsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```csharp
public double MaximumEventAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumRetryAttemptsInput`<sup>Optional</sup> <a name="MaximumRetryAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```csharp
public double MaximumRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```csharp
public double MaximumEventAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---


### CloudwatchEventTargetRunCommandTargetsList <a name="CloudwatchEventTargetRunCommandTargetsList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRunCommandTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get"></a>

```csharp
private CloudwatchEventTargetRunCommandTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetRunCommandTargetsOutputReference <a name="CloudwatchEventTargetRunCommandTargetsOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetRunCommandTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventTargetSqsTargetOutputReference <a name="CloudwatchEventTargetSqsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventTargetSqsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId"></a>

```csharp
private void ResetMessageGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput"></a>

```csharp
public string MessageGroupIdInput { get; }
```

- *Type:* string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventTargetSqsTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---



