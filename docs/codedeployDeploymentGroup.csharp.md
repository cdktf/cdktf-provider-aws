# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktf/provider-aws.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group aws_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroup(Construct Scope, string Id, CodedeployDeploymentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">PutAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig">PutBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">PutDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter">PutEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">PutEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService">PutEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">PutLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter">PutOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration">PutTriggerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">ResetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups">ResetAutoscalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig">ResetBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">ResetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">ResetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter">ResetEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">ResetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService">ResetEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">ResetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter">ResetOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration">ResetTriggerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAlarmConfiguration` <a name="PutAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```csharp
private void PutAlarmConfiguration(CodedeployDeploymentGroupAlarmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```csharp
private void PutAutoRollbackConfiguration(CodedeployDeploymentGroupAutoRollbackConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `PutBlueGreenDeploymentConfig` <a name="PutBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig"></a>

```csharp
private void PutBlueGreenDeploymentConfig(CodedeployDeploymentGroupBlueGreenDeploymentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `PutDeploymentStyle` <a name="PutDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```csharp
private void PutDeploymentStyle(CodedeployDeploymentGroupDeploymentStyle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `PutEc2TagFilter` <a name="PutEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter"></a>

```csharp
private void PutEc2TagFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter.parameter.value"></a>

- *Type:* object

---

##### `PutEc2TagSet` <a name="PutEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```csharp
private void PutEc2TagSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* object

---

##### `PutEcsService` <a name="PutEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService"></a>

```csharp
private void PutEcsService(CodedeployDeploymentGroupEcsService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `PutLoadBalancerInfo` <a name="PutLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```csharp
private void PutLoadBalancerInfo(CodedeployDeploymentGroupLoadBalancerInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `PutOnPremisesInstanceTagFilter` <a name="PutOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter"></a>

```csharp
private void PutOnPremisesInstanceTagFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTriggerConfiguration` <a name="PutTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration"></a>

```csharp
private void PutTriggerConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAlarmConfiguration` <a name="ResetAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```csharp
private void ResetAlarmConfiguration()
```

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```csharp
private void ResetAutoRollbackConfiguration()
```

##### `ResetAutoscalingGroups` <a name="ResetAutoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups"></a>

```csharp
private void ResetAutoscalingGroups()
```

##### `ResetBlueGreenDeploymentConfig` <a name="ResetBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig"></a>

```csharp
private void ResetBlueGreenDeploymentConfig()
```

##### `ResetDeploymentConfigName` <a name="ResetDeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```csharp
private void ResetDeploymentConfigName()
```

##### `ResetDeploymentStyle` <a name="ResetDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```csharp
private void ResetDeploymentStyle()
```

##### `ResetEc2TagFilter` <a name="ResetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter"></a>

```csharp
private void ResetEc2TagFilter()
```

##### `ResetEc2TagSet` <a name="ResetEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```csharp
private void ResetEc2TagSet()
```

##### `ResetEcsService` <a name="ResetEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService"></a>

```csharp
private void ResetEcsService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancerInfo` <a name="ResetLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```csharp
private void ResetLoadBalancerInfo()
```

##### `ResetOnPremisesInstanceTagFilter` <a name="ResetOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter"></a>

```csharp
private void ResetOnPremisesInstanceTagFilter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTriggerConfiguration` <a name="ResetTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration"></a>

```csharp
private void ResetTriggerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig">BlueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId">DeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter">Ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService">EcsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter">OnPremisesInstanceTagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration">TriggerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">AlarmConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput">AutoscalingGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput">BlueGreenDeploymentConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">DeploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">DeploymentGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">DeploymentStyleInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput">Ec2TagFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">Ec2TagSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput">EcsServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">LoadBalancerInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput">OnPremisesInstanceTagFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput">TriggerConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups">AutoscalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlarmConfiguration`<sup>Required</sup> <a name="AlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfigurationOutputReference AlarmConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `BlueGreenDeploymentConfig`<sup>Required</sup> <a name="BlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference BlueGreenDeploymentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a>

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `DeploymentGroupId`<sup>Required</sup> <a name="DeploymentGroupId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId"></a>

```csharp
public string DeploymentGroupId { get; }
```

- *Type:* string

---

##### `DeploymentStyle`<sup>Required</sup> <a name="DeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyleOutputReference DeploymentStyle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `Ec2TagFilter`<sup>Required</sup> <a name="Ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter"></a>

```csharp
public CodedeployDeploymentGroupEc2TagFilterList Ec2TagFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a>

---

##### `Ec2TagSet`<sup>Required</sup> <a name="Ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSetList Ec2TagSet { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a>

---

##### `EcsService`<sup>Required</sup> <a name="EcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService"></a>

```csharp
public CodedeployDeploymentGroupEcsServiceOutputReference EcsService { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a>

---

##### `LoadBalancerInfo`<sup>Required</sup> <a name="LoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoOutputReference LoadBalancerInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `OnPremisesInstanceTagFilter`<sup>Required</sup> <a name="OnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter"></a>

```csharp
public CodedeployDeploymentGroupOnPremisesInstanceTagFilterList OnPremisesInstanceTagFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a>

---

##### `TriggerConfiguration`<sup>Required</sup> <a name="TriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration"></a>

```csharp
public CodedeployDeploymentGroupTriggerConfigurationList TriggerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a>

---

##### `AlarmConfigurationInput`<sup>Optional</sup> <a name="AlarmConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfiguration AlarmConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `AutoscalingGroupsInput`<sup>Optional</sup> <a name="AutoscalingGroupsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput"></a>

```csharp
public string[] AutoscalingGroupsInput { get; }
```

- *Type:* string[]

---

##### `BlueGreenDeploymentConfigInput`<sup>Optional</sup> <a name="BlueGreenDeploymentConfigInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfig BlueGreenDeploymentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `DeploymentConfigNameInput`<sup>Optional</sup> <a name="DeploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```csharp
public string DeploymentConfigNameInput { get; }
```

- *Type:* string

---

##### `DeploymentGroupNameInput`<sup>Optional</sup> <a name="DeploymentGroupNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```csharp
public string DeploymentGroupNameInput { get; }
```

- *Type:* string

---

##### `DeploymentStyleInput`<sup>Optional</sup> <a name="DeploymentStyleInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyle DeploymentStyleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `Ec2TagFilterInput`<sup>Optional</sup> <a name="Ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput"></a>

```csharp
public object Ec2TagFilterInput { get; }
```

- *Type:* object

---

##### `Ec2TagSetInput`<sup>Optional</sup> <a name="Ec2TagSetInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```csharp
public object Ec2TagSetInput { get; }
```

- *Type:* object

---

##### `EcsServiceInput`<sup>Optional</sup> <a name="EcsServiceInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput"></a>

```csharp
public CodedeployDeploymentGroupEcsService EcsServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInfoInput`<sup>Optional</sup> <a name="LoadBalancerInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `OnPremisesInstanceTagFilterInput`<sup>Optional</sup> <a name="OnPremisesInstanceTagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput"></a>

```csharp
public object OnPremisesInstanceTagFilterInput { get; }
```

- *Type:* object

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TriggerConfigurationInput`<sup>Optional</sup> <a name="TriggerConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput"></a>

```csharp
public object TriggerConfigurationInput { get; }
```

- *Type:* object

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `AutoscalingGroups`<sup>Required</sup> <a name="AutoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups"></a>

```csharp
public string[] AutoscalingGroups { get; }
```

- *Type:* string[]

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; }
```

- *Type:* string

---

##### `DeploymentGroupName`<sup>Required</sup> <a name="DeploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```csharp
public string DeploymentGroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupAlarmConfiguration {
    string[] Alarms = null,
    object Enabled = null,
    object IgnorePollAlarmFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">Alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `IgnorePollAlarmFailure`<sup>Optional</sup> <a name="IgnorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```csharp
public object IgnorePollAlarmFailure { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}.

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupAutoRollbackConfiguration {
    object Enabled = null,
    string[] Events = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfig <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfig {
    CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption DeploymentReadyOption = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption GreenFleetProvisioningOption = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | deployment_ready_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | green_fleet_provisioning_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | terminate_blue_instances_on_deployment_success block. |

---

##### `DeploymentReadyOption`<sup>Optional</sup> <a name="DeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption DeploymentReadyOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

deployment_ready_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `GreenFleetProvisioningOption`<sup>Optional</sup> <a name="GreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption GreenFleetProvisioningOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

green_fleet_provisioning_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

terminate_blue_instances_on_deployment_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
    string ActionOnTimeout = null,
    double WaitTimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}. |

---

##### `ActionOnTimeout`<sup>Optional</sup> <a name="ActionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout"></a>

```csharp
public string ActionOnTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}.

---

##### `WaitTimeInMinutes`<sup>Optional</sup> <a name="WaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes"></a>

```csharp
public double WaitTimeInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
    string Action = null,
    double TerminationWaitTimeInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

##### `TerminationWaitTimeInMinutes`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```csharp
public double TerminationWaitTimeInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}.

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppName,
    string DeploymentGroupName,
    string ServiceRoleArn,
    CodedeployDeploymentGroupAlarmConfiguration AlarmConfiguration = null,
    CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfiguration = null,
    string[] AutoscalingGroups = null,
    CodedeployDeploymentGroupBlueGreenDeploymentConfig BlueGreenDeploymentConfig = null,
    string DeploymentConfigName = null,
    CodedeployDeploymentGroupDeploymentStyle DeploymentStyle = null,
    object Ec2TagFilter = null,
    object Ec2TagSet = null,
    CodedeployDeploymentGroupEcsService EcsService = null,
    string Id = null,
    CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfo = null,
    object OnPremisesInstanceTagFilter = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TriggerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName">AppName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | alarm_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | auto_rollback_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups">AutoscalingGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig">BlueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | blue_green_deployment_config block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | deployment_style block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter">Ec2TagFilter</a></code> | <code>object</code> | ec2_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">Ec2TagSet</a></code> | <code>object</code> | ec2_tag_set block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService">EcsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | ecs_service block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | load_balancer_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter">OnPremisesInstanceTagFilter</a></code> | <code>object</code> | on_premises_instance_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration">TriggerConfiguration</a></code> | <code>object</code> | trigger_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}.

---

##### `DeploymentGroupName`<sup>Required</sup> <a name="DeploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```csharp
public string DeploymentGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}.

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}.

---

##### `AlarmConfiguration`<sup>Optional</sup> <a name="AlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfiguration AlarmConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

alarm_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfiguration AutoRollbackConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `AutoscalingGroups`<sup>Optional</sup> <a name="AutoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups"></a>

```csharp
public string[] AutoscalingGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}.

---

##### `BlueGreenDeploymentConfig`<sup>Optional</sup> <a name="BlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfig BlueGreenDeploymentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

blue_green_deployment_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}

---

##### `DeploymentConfigName`<sup>Optional</sup> <a name="DeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}.

---

##### `DeploymentStyle`<sup>Optional</sup> <a name="DeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyle DeploymentStyle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

deployment_style block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `Ec2TagFilter`<sup>Optional</sup> <a name="Ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter"></a>

```csharp
public object Ec2TagFilter { get; set; }
```

- *Type:* object

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

##### `Ec2TagSet`<sup>Optional</sup> <a name="Ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```csharp
public object Ec2TagSet { get; set; }
```

- *Type:* object

ec2_tag_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}

---

##### `EcsService`<sup>Optional</sup> <a name="EcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService"></a>

```csharp
public CodedeployDeploymentGroupEcsService EcsService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

ecs_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerInfo`<sup>Optional</sup> <a name="LoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfo LoadBalancerInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

load_balancer_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `OnPremisesInstanceTagFilter`<sup>Optional</sup> <a name="OnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter"></a>

```csharp
public object OnPremisesInstanceTagFilter { get; set; }
```

- *Type:* object

on_premises_instance_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}.

---

##### `TriggerConfiguration`<sup>Optional</sup> <a name="TriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration"></a>

```csharp
public object TriggerConfiguration { get; set; }
```

- *Type:* object

trigger_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupDeploymentStyle {
    string DeploymentOption = null,
    string DeploymentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}. |

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}.

---

### CodedeployDeploymentGroupEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagFilter {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSet {
    object Ec2TagFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter">Ec2TagFilter</a></code> | <code>object</code> | ec2_tag_filter block. |

---

##### `Ec2TagFilter`<sup>Optional</sup> <a name="Ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter"></a>

```csharp
public object Ec2TagFilter { get; set; }
```

- *Type:* object

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEcsService <a name="CodedeployDeploymentGroupEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEcsService {
    string ClusterName,
    string ServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}. |

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}.

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfo {
    object ElbInfo = null,
    object TargetGroupInfo = null,
    CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo TargetGroupPairInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo">ElbInfo</a></code> | <code>object</code> | elb_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo">TargetGroupInfo</a></code> | <code>object</code> | target_group_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo">TargetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | target_group_pair_info block. |

---

##### `ElbInfo`<sup>Optional</sup> <a name="ElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo"></a>

```csharp
public object ElbInfo { get; set; }
```

- *Type:* object

elb_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#elb_info CodedeployDeploymentGroup#elb_info}

---

##### `TargetGroupInfo`<sup>Optional</sup> <a name="TargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo"></a>

```csharp
public object TargetGroupInfo { get; set; }
```

- *Type:* object

target_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_info CodedeployDeploymentGroup#target_group_info}

---

##### `TargetGroupPairInfo`<sup>Optional</sup> <a name="TargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo TargetGroupPairInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

target_group_pair_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
    CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute ProdTrafficRoute,
    object TargetGroup,
    CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute TestTrafficRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | prod_traffic_route block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup">TargetGroup</a></code> | <code>object</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | test_traffic_route block. |

---

##### `ProdTrafficRoute`<sup>Required</sup> <a name="ProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute ProdTrafficRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

prod_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup"></a>

```csharp
public object TargetGroup { get; set; }
```

- *Type:* object

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group CodedeployDeploymentGroup#target_group}

---

##### `TestTrafficRoute`<sup>Optional</sup> <a name="TestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute TestTrafficRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

test_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
    string[] ListenerArns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
    string[] ListenerArns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilter <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
    string Key = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupTriggerConfiguration <a name="CodedeployDeploymentGroupTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupTriggerConfiguration {
    string[] TriggerEvents,
    string TriggerName,
    string TriggerTargetArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents">TriggerEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName">TriggerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}. |

---

##### `TriggerEvents`<sup>Required</sup> <a name="TriggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents"></a>

```csharp
public string[] TriggerEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}.

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName"></a>

```csharp
public string TriggerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}.

---

##### `TriggerTargetArn`<sup>Required</sup> <a name="TriggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn"></a>

```csharp
public string TriggerTargetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupAlarmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">ResetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIgnorePollAlarmFailure` <a name="ResetIgnorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```csharp
private void ResetIgnorePollAlarmFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">IgnorePollAlarmFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IgnorePollAlarmFailureInput`<sup>Optional</sup> <a name="IgnorePollAlarmFailureInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```csharp
public object IgnorePollAlarmFailureInput { get; }
```

- *Type:* object

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IgnorePollAlarmFailure`<sup>Required</sup> <a name="IgnorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```csharp
public object IgnorePollAlarmFailure { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupAlarmConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```csharp
private void ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout">ResetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">ResetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionOnTimeout` <a name="ResetActionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```csharp
private void ResetActionOnTimeout()
```

##### `ResetWaitTimeInMinutes` <a name="ResetWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```csharp
private void ResetWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">ActionOnTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">WaitTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionOnTimeoutInput`<sup>Optional</sup> <a name="ActionOnTimeoutInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```csharp
public string ActionOnTimeoutInput { get; }
```

- *Type:* string

---

##### `WaitTimeInMinutesInput`<sup>Optional</sup> <a name="WaitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```csharp
public double WaitTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `ActionOnTimeout`<sup>Required</sup> <a name="ActionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```csharp
public string ActionOnTimeout { get; }
```

- *Type:* string

---

##### `WaitTimeInMinutes`<sup>Required</sup> <a name="WaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```csharp
public double WaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption">PutDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption">PutGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">PutTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption">ResetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption">ResetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">ResetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeploymentReadyOption` <a name="PutDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption"></a>

```csharp
private void PutDeploymentReadyOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `PutGreenFleetProvisioningOption` <a name="PutGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption"></a>

```csharp
private void PutGreenFleetProvisioningOption(CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `PutTerminateBlueInstancesOnDeploymentSuccess` <a name="PutTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
private void PutTerminateBlueInstancesOnDeploymentSuccess(CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `ResetDeploymentReadyOption` <a name="ResetDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption"></a>

```csharp
private void ResetDeploymentReadyOption()
```

##### `ResetGreenFleetProvisioningOption` <a name="ResetGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption"></a>

```csharp
private void ResetGreenFleetProvisioningOption()
```

##### `ResetTerminateBlueInstancesOnDeploymentSuccess` <a name="ResetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
private void ResetTerminateBlueInstancesOnDeploymentSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput">DeploymentReadyOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput">GreenFleetProvisioningOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">TerminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentReadyOption`<sup>Required</sup> <a name="DeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference DeploymentReadyOption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a>

---

##### `GreenFleetProvisioningOption`<sup>Required</sup> <a name="GreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference GreenFleetProvisioningOption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference TerminateBlueInstancesOnDeploymentSuccess { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `DeploymentReadyOptionInput`<sup>Optional</sup> <a name="DeploymentReadyOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption DeploymentReadyOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `GreenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="GreenFleetProvisioningOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption GreenFleetProvisioningOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="TerminateBlueInstancesOnDeploymentSuccessInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess TerminateBlueInstancesOnDeploymentSuccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">ResetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetTerminationWaitTimeInMinutes` <a name="ResetTerminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```csharp
private void ResetTerminationWaitTimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">TerminationWaitTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `TerminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="TerminationWaitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```csharp
public double TerminationWaitTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `TerminationWaitTimeInMinutes`<sup>Required</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```csharp
public double TerminationWaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupDeploymentStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```csharp
private void ResetDeploymentOption()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```csharp
public string DeploymentOptionInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupDeploymentStyle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSetEc2TagFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEc2TagSetList <a name="CodedeployDeploymentGroupEc2TagSetList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get"></a>

```csharp
private CodedeployDeploymentGroupEc2TagSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEc2TagSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter">PutEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter">ResetEc2TagFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2TagFilter` <a name="PutEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter"></a>

```csharp
private void PutEc2TagFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetEc2TagFilter` <a name="ResetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter"></a>

```csharp
private void ResetEc2TagFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter">Ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput">Ec2TagFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2TagFilter`<sup>Required</sup> <a name="Ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter"></a>

```csharp
public CodedeployDeploymentGroupEc2TagSetEc2TagFilterList Ec2TagFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a>

---

##### `Ec2TagFilterInput`<sup>Optional</sup> <a name="Ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput"></a>

```csharp
public object Ec2TagFilterInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupEcsServiceOutputReference <a name="CodedeployDeploymentGroupEcsServiceOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupEcsServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupEcsService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo">PutElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo">PutTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo">PutTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo">ResetElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo">ResetTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo">ResetTargetGroupPairInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElbInfo` <a name="PutElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo"></a>

```csharp
private void PutElbInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo.parameter.value"></a>

- *Type:* object

---

##### `PutTargetGroupInfo` <a name="PutTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo"></a>

```csharp
private void PutTargetGroupInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo.parameter.value"></a>

- *Type:* object

---

##### `PutTargetGroupPairInfo` <a name="PutTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo"></a>

```csharp
private void PutTargetGroupPairInfo(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `ResetElbInfo` <a name="ResetElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo"></a>

```csharp
private void ResetElbInfo()
```

##### `ResetTargetGroupInfo` <a name="ResetTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo"></a>

```csharp
private void ResetTargetGroupInfo()
```

##### `ResetTargetGroupPairInfo` <a name="ResetTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo"></a>

```csharp
private void ResetTargetGroupPairInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo">ElbInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo">TargetGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo">TargetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput">ElbInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput">TargetGroupInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput">TargetGroupPairInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElbInfo`<sup>Required</sup> <a name="ElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoElbInfoList ElbInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a>

---

##### `TargetGroupInfo`<sup>Required</sup> <a name="TargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList TargetGroupInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a>

---

##### `TargetGroupPairInfo`<sup>Required</sup> <a name="TargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference TargetGroupPairInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a>

---

##### `ElbInfoInput`<sup>Optional</sup> <a name="ElbInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput"></a>

```csharp
public object ElbInfoInput { get; }
```

- *Type:* object

---

##### `TargetGroupInfoInput`<sup>Optional</sup> <a name="TargetGroupInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput"></a>

```csharp
public object TargetGroupInfoInput { get; }
```

- *Type:* object

---

##### `TargetGroupPairInfoInput`<sup>Optional</sup> <a name="TargetGroupPairInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo TargetGroupPairInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute">PutProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute">PutTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute">ResetTestTrafficRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProdTrafficRoute` <a name="PutProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute"></a>

```csharp
private void PutProdTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup"></a>

```csharp
private void PutTargetGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* object

---

##### `PutTestTrafficRoute` <a name="PutTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute"></a>

```csharp
private void PutTestTrafficRoute(CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `ResetTestTrafficRoute` <a name="ResetTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute"></a>

```csharp
private void ResetTestTrafficRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput">ProdTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput">TestTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProdTrafficRoute`<sup>Required</sup> <a name="ProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference ProdTrafficRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList TargetGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a>

---

##### `TestTrafficRoute`<sup>Required</sup> <a name="TestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference TestTrafficRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a>

---

##### `ProdTrafficRouteInput`<sup>Optional</sup> <a name="ProdTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute ProdTrafficRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput"></a>

```csharp
public object TargetGroupInput { get; }
```

- *Type:* object

---

##### `TestTrafficRouteInput`<sup>Optional</sup> <a name="TestTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute TestTrafficRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```csharp
public string[] ListenerArnsInput { get; }
```

- *Type:* string[]

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get"></a>

```csharp
private CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput">ListenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArnsInput`<sup>Optional</sup> <a name="ListenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```csharp
public string[] ListenerArnsInput { get; }
```

- *Type:* string[]

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get"></a>

```csharp
private CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupTriggerConfigurationList <a name="CodedeployDeploymentGroupTriggerConfigurationList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupTriggerConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get"></a>

```csharp
private CodedeployDeploymentGroupTriggerConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CodedeployDeploymentGroupTriggerConfigurationOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentGroupTriggerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput">TriggerEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput">TriggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput">TriggerTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents">TriggerEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName">TriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerEventsInput`<sup>Optional</sup> <a name="TriggerEventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput"></a>

```csharp
public string[] TriggerEventsInput { get; }
```

- *Type:* string[]

---

##### `TriggerNameInput`<sup>Optional</sup> <a name="TriggerNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput"></a>

```csharp
public string TriggerNameInput { get; }
```

- *Type:* string

---

##### `TriggerTargetArnInput`<sup>Optional</sup> <a name="TriggerTargetArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput"></a>

```csharp
public string TriggerTargetArnInput { get; }
```

- *Type:* string

---

##### `TriggerEvents`<sup>Required</sup> <a name="TriggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents"></a>

```csharp
public string[] TriggerEvents { get; }
```

- *Type:* string[]

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName"></a>

```csharp
public string TriggerName { get; }
```

- *Type:* string

---

##### `TriggerTargetArn`<sup>Required</sup> <a name="TriggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn"></a>

```csharp
public string TriggerTargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



