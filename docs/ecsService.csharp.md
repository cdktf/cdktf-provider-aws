# `ecsService` Submodule <a name="`ecsService` Submodule" id="@cdktf/provider-aws.ecsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsService <a name="EcsService" id="@cdktf/provider-aws.ecsService.EcsService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsService(Construct Scope, string Id, EcsServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig">EcsServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecsService.EcsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig">EcsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy">PutCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker">PutDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putDeploymentController">PutDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy">PutOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints">PutPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration">PutServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries">PutServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy">ResetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker">ResetDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController">ResetDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent">ResetDeploymentMaximumPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent">ResetDeploymentMinimumHealthyPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount">ResetDesiredCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags">ResetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand">ResetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment">ResetForceNewDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds">ResetHealthCheckGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetIamRole">ResetIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLaunchType">ResetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy">ResetOrderedPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints">ResetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy">ResetSchedulingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration">ResetServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries">ResetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition">ResetTaskDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetTriggers">ResetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState">ResetWaitForSteadyState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsService.EcsService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsService.EcsService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsService.EcsService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsService.EcsService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAlarms` <a name="PutAlarms" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms"></a>

```csharp
private void PutAlarms(EcsServiceAlarms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `PutCapacityProviderStrategy` <a name="PutCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy"></a>

```csharp
private void PutCapacityProviderStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutDeploymentCircuitBreaker` <a name="PutDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker"></a>

```csharp
private void PutDeploymentCircuitBreaker(EcsServiceDeploymentCircuitBreaker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentCircuitBreaker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `PutDeploymentController` <a name="PutDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController"></a>

```csharp
private void PutDeploymentController(EcsServiceDeploymentController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putDeploymentController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putLoadBalancer.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(EcsServiceNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `PutOrderedPlacementStrategy` <a name="PutOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy"></a>

```csharp
private void PutOrderedPlacementStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putOrderedPlacementStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutPlacementConstraints` <a name="PutPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints"></a>

```csharp
private void PutPlacementConstraints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putPlacementConstraints.parameter.value"></a>

- *Type:* object

---

##### `PutServiceConnectConfiguration` <a name="PutServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration"></a>

```csharp
private void PutServiceConnectConfiguration(EcsServiceServiceConnectConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `PutServiceRegistries` <a name="PutServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries"></a>

```csharp
private void PutServiceRegistries(EcsServiceServiceRegistries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putServiceRegistries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts"></a>

```csharp
private void PutTimeouts(EcsServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktf/provider-aws.ecsService.EcsService.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetCapacityProviderStrategy` <a name="ResetCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetCapacityProviderStrategy"></a>

```csharp
private void ResetCapacityProviderStrategy()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-aws.ecsService.EcsService.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetDeploymentCircuitBreaker` <a name="ResetDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentCircuitBreaker"></a>

```csharp
private void ResetDeploymentCircuitBreaker()
```

##### `ResetDeploymentController` <a name="ResetDeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentController"></a>

```csharp
private void ResetDeploymentController()
```

##### `ResetDeploymentMaximumPercent` <a name="ResetDeploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMaximumPercent"></a>

```csharp
private void ResetDeploymentMaximumPercent()
```

##### `ResetDeploymentMinimumHealthyPercent` <a name="ResetDeploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.resetDeploymentMinimumHealthyPercent"></a>

```csharp
private void ResetDeploymentMinimumHealthyPercent()
```

##### `ResetDesiredCount` <a name="ResetDesiredCount" id="@cdktf/provider-aws.ecsService.EcsService.resetDesiredCount"></a>

```csharp
private void ResetDesiredCount()
```

##### `ResetEnableEcsManagedTags` <a name="ResetEnableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableEcsManagedTags"></a>

```csharp
private void ResetEnableEcsManagedTags()
```

##### `ResetEnableExecuteCommand` <a name="ResetEnableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.resetEnableExecuteCommand"></a>

```csharp
private void ResetEnableExecuteCommand()
```

##### `ResetForceNewDeployment` <a name="ResetForceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.resetForceNewDeployment"></a>

```csharp
private void ResetForceNewDeployment()
```

##### `ResetHealthCheckGracePeriodSeconds` <a name="ResetHealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.resetHealthCheckGracePeriodSeconds"></a>

```csharp
private void ResetHealthCheckGracePeriodSeconds()
```

##### `ResetIamRole` <a name="ResetIamRole" id="@cdktf/provider-aws.ecsService.EcsService.resetIamRole"></a>

```csharp
private void ResetIamRole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsService.EcsService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLaunchType` <a name="ResetLaunchType" id="@cdktf/provider-aws.ecsService.EcsService.resetLaunchType"></a>

```csharp
private void ResetLaunchType()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetOrderedPlacementStrategy` <a name="ResetOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetOrderedPlacementStrategy"></a>

```csharp
private void ResetOrderedPlacementStrategy()
```

##### `ResetPlacementConstraints` <a name="ResetPlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.resetPlacementConstraints"></a>

```csharp
private void ResetPlacementConstraints()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="@cdktf/provider-aws.ecsService.EcsService.resetPlatformVersion"></a>

```csharp
private void ResetPlatformVersion()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktf/provider-aws.ecsService.EcsService.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetSchedulingStrategy` <a name="ResetSchedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.resetSchedulingStrategy"></a>

```csharp
private void ResetSchedulingStrategy()
```

##### `ResetServiceConnectConfiguration` <a name="ResetServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceConnectConfiguration"></a>

```csharp
private void ResetServiceConnectConfiguration()
```

##### `ResetServiceRegistries` <a name="ResetServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.resetServiceRegistries"></a>

```csharp
private void ResetServiceRegistries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecsService.EcsService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecsService.EcsService.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTaskDefinition` <a name="ResetTaskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.resetTaskDefinition"></a>

```csharp
private void ResetTaskDefinition()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ecsService.EcsService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.ecsService.EcsService.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

##### `ResetWaitForSteadyState` <a name="ResetWaitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.resetWaitForSteadyState"></a>

```csharp
private void ResetWaitForSteadyState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsService.EcsService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsService.EcsService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarms">Alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker">DeploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentController">DeploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy">OrderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration">ServiceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries">ServiceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput">AlarmsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput">CapacityProviderStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput">DeploymentCircuitBreakerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput">DeploymentControllerInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput">DeploymentMaximumPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput">DeploymentMinimumHealthyPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput">DesiredCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput">EnableEcsManagedTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput">EnableExecuteCommandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput">ForceNewDeploymentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput">HealthCheckGracePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput">IamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput">LaunchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput">OrderedPlacementStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput">PlacementConstraintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput">SchedulingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput">ServiceConnectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput">ServiceRegistriesInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput">TaskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput">WaitForSteadyStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent">DeploymentMaximumPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent">DeploymentMinimumHealthyPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.desiredCount">DesiredCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment">ForceNewDeployment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds">HealthCheckGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.iamRole">IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.launchType">LaunchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy">SchedulingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState">WaitForSteadyState</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsService.EcsService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsService.EcsService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsService.EcsService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsService.EcsService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsService.EcsService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsService.EcsService.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsService.EcsService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsService.EcsService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsService.EcsService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsService.EcsService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsService.EcsService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.ecsService.EcsService.property.alarms"></a>

```csharp
public EcsServiceAlarmsOutputReference Alarms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference">EcsServiceAlarmsOutputReference</a>

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategy"></a>

```csharp
public EcsServiceCapacityProviderStrategyList CapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList">EcsServiceCapacityProviderStrategyList</a>

---

##### `DeploymentCircuitBreaker`<sup>Required</sup> <a name="DeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreaker"></a>

```csharp
public EcsServiceDeploymentCircuitBreakerOutputReference DeploymentCircuitBreaker { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference">EcsServiceDeploymentCircuitBreakerOutputReference</a>

---

##### `DeploymentController`<sup>Required</sup> <a name="DeploymentController" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentController"></a>

```csharp
public EcsServiceDeploymentControllerOutputReference DeploymentController { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference">EcsServiceDeploymentControllerOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancer"></a>

```csharp
public EcsServiceLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList">EcsServiceLoadBalancerList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfiguration"></a>

```csharp
public EcsServiceNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference">EcsServiceNetworkConfigurationOutputReference</a>

---

##### `OrderedPlacementStrategy`<sup>Required</sup> <a name="OrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategy"></a>

```csharp
public EcsServiceOrderedPlacementStrategyList OrderedPlacementStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList">EcsServiceOrderedPlacementStrategyList</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraints"></a>

```csharp
public EcsServicePlacementConstraintsList PlacementConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList">EcsServicePlacementConstraintsList</a>

---

##### `ServiceConnectConfiguration`<sup>Required</sup> <a name="ServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfiguration"></a>

```csharp
public EcsServiceServiceConnectConfigurationOutputReference ServiceConnectConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference">EcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `ServiceRegistries`<sup>Required</sup> <a name="ServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistries"></a>

```csharp
public EcsServiceServiceRegistriesOutputReference ServiceRegistries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference">EcsServiceServiceRegistriesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecsService.EcsService.property.timeouts"></a>

```csharp
public EcsServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference">EcsServiceTimeoutsOutputReference</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.alarmsInput"></a>

```csharp
public EcsServiceAlarms AlarmsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---

##### `CapacityProviderStrategyInput`<sup>Optional</sup> <a name="CapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.capacityProviderStrategyInput"></a>

```csharp
public object CapacityProviderStrategyInput { get; }
```

- *Type:* object

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-aws.ecsService.EcsService.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DeploymentCircuitBreakerInput`<sup>Optional</sup> <a name="DeploymentCircuitBreakerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentCircuitBreakerInput"></a>

```csharp
public EcsServiceDeploymentCircuitBreaker DeploymentCircuitBreakerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---

##### `DeploymentControllerInput`<sup>Optional</sup> <a name="DeploymentControllerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentControllerInput"></a>

```csharp
public EcsServiceDeploymentController DeploymentControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---

##### `DeploymentMaximumPercentInput`<sup>Optional</sup> <a name="DeploymentMaximumPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercentInput"></a>

```csharp
public double DeploymentMaximumPercentInput { get; }
```

- *Type:* double

---

##### `DeploymentMinimumHealthyPercentInput`<sup>Optional</sup> <a name="DeploymentMinimumHealthyPercentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercentInput"></a>

```csharp
public double DeploymentMinimumHealthyPercentInput { get; }
```

- *Type:* double

---

##### `DesiredCountInput`<sup>Optional</sup> <a name="DesiredCountInput" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCountInput"></a>

```csharp
public double DesiredCountInput { get; }
```

- *Type:* double

---

##### `EnableEcsManagedTagsInput`<sup>Optional</sup> <a name="EnableEcsManagedTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTagsInput"></a>

```csharp
public object EnableEcsManagedTagsInput { get; }
```

- *Type:* object

---

##### `EnableExecuteCommandInput`<sup>Optional</sup> <a name="EnableExecuteCommandInput" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommandInput"></a>

```csharp
public object EnableExecuteCommandInput { get; }
```

- *Type:* object

---

##### `ForceNewDeploymentInput`<sup>Optional</sup> <a name="ForceNewDeploymentInput" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeploymentInput"></a>

```csharp
public object ForceNewDeploymentInput { get; }
```

- *Type:* object

---

##### `HealthCheckGracePeriodSecondsInput`<sup>Optional</sup> <a name="HealthCheckGracePeriodSecondsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSecondsInput"></a>

```csharp
public double HealthCheckGracePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `IamRoleInput`<sup>Optional</sup> <a name="IamRoleInput" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRoleInput"></a>

```csharp
public string IamRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsService.EcsService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LaunchTypeInput`<sup>Optional</sup> <a name="LaunchTypeInput" id="@cdktf/provider-aws.ecsService.EcsService.property.launchTypeInput"></a>

```csharp
public string LaunchTypeInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-aws.ecsService.EcsService.property.loadBalancerInput"></a>

```csharp
public object LoadBalancerInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsService.EcsService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.networkConfigurationInput"></a>

```csharp
public EcsServiceNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---

##### `OrderedPlacementStrategyInput`<sup>Optional</sup> <a name="OrderedPlacementStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.orderedPlacementStrategyInput"></a>

```csharp
public object OrderedPlacementStrategyInput { get; }
```

- *Type:* object

---

##### `PlacementConstraintsInput`<sup>Optional</sup> <a name="PlacementConstraintsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.placementConstraintsInput"></a>

```csharp
public object PlacementConstraintsInput { get; }
```

- *Type:* object

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTagsInput"></a>

```csharp
public string PropagateTagsInput { get; }
```

- *Type:* string

---

##### `SchedulingStrategyInput`<sup>Optional</sup> <a name="SchedulingStrategyInput" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategyInput"></a>

```csharp
public string SchedulingStrategyInput { get; }
```

- *Type:* string

---

##### `ServiceConnectConfigurationInput`<sup>Optional</sup> <a name="ServiceConnectConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceConnectConfigurationInput"></a>

```csharp
public EcsServiceServiceConnectConfiguration ServiceConnectConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---

##### `ServiceRegistriesInput`<sup>Optional</sup> <a name="ServiceRegistriesInput" id="@cdktf/provider-aws.ecsService.EcsService.property.serviceRegistriesInput"></a>

```csharp
public EcsServiceServiceRegistries ServiceRegistriesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskDefinitionInput`<sup>Optional</sup> <a name="TaskDefinitionInput" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinitionInput"></a>

```csharp
public string TaskDefinitionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ecsService.EcsService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.ecsService.EcsService.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WaitForSteadyStateInput`<sup>Optional</sup> <a name="WaitForSteadyStateInput" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyStateInput"></a>

```csharp
public object WaitForSteadyStateInput { get; }
```

- *Type:* object

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-aws.ecsService.EcsService.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `DeploymentMaximumPercent`<sup>Required</sup> <a name="DeploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMaximumPercent"></a>

```csharp
public double DeploymentMaximumPercent { get; }
```

- *Type:* double

---

##### `DeploymentMinimumHealthyPercent`<sup>Required</sup> <a name="DeploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsService.property.deploymentMinimumHealthyPercent"></a>

```csharp
public double DeploymentMinimumHealthyPercent { get; }
```

- *Type:* double

---

##### `DesiredCount`<sup>Required</sup> <a name="DesiredCount" id="@cdktf/provider-aws.ecsService.EcsService.property.desiredCount"></a>

```csharp
public double DesiredCount { get; }
```

- *Type:* double

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsService.property.enableEcsManagedTags"></a>

```csharp
public object EnableEcsManagedTags { get; }
```

- *Type:* object

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsService.property.enableExecuteCommand"></a>

```csharp
public object EnableExecuteCommand { get; }
```

- *Type:* object

---

##### `ForceNewDeployment`<sup>Required</sup> <a name="ForceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsService.property.forceNewDeployment"></a>

```csharp
public object ForceNewDeployment { get; }
```

- *Type:* object

---

##### `HealthCheckGracePeriodSeconds`<sup>Required</sup> <a name="HealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsService.property.healthCheckGracePeriodSeconds"></a>

```csharp
public double HealthCheckGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktf/provider-aws.ecsService.EcsService.property.iamRole"></a>

```csharp
public string IamRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsService.EcsService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktf/provider-aws.ecsService.EcsService.property.launchType"></a>

```csharp
public string LaunchType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsService.EcsService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.ecsService.EcsService.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.ecsService.EcsService.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `SchedulingStrategy`<sup>Required</sup> <a name="SchedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsService.property.schedulingStrategy"></a>

```csharp
public string SchedulingStrategy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecsService.EcsService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsService.EcsService.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktf/provider-aws.ecsService.EcsService.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.ecsService.EcsService.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WaitForSteadyState`<sup>Required</sup> <a name="WaitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsService.property.waitForSteadyState"></a>

```csharp
public object WaitForSteadyState { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsService.EcsService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsServiceAlarms <a name="EcsServiceAlarms" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceAlarms {
    string[] AlarmNames,
    object Enable,
    object Rollback
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback">Rollback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarm_names EcsService#alarm_names}.

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarms.property.rollback"></a>

```csharp
public object Rollback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceCapacityProviderStrategy <a name="EcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceCapacityProviderStrategy {
    string CapacityProvider,
    double Base = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base">Base</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider EcsService#capacity_provider}.

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.base"></a>

```csharp
public double Base { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#base EcsService#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategy.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#weight EcsService#weight}.

---

### EcsServiceConfig <a name="EcsServiceConfig" id="@cdktf/provider-aws.ecsService.EcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    EcsServiceAlarms Alarms = null,
    object CapacityProviderStrategy = null,
    string Cluster = null,
    EcsServiceDeploymentCircuitBreaker DeploymentCircuitBreaker = null,
    EcsServiceDeploymentController DeploymentController = null,
    double DeploymentMaximumPercent = null,
    double DeploymentMinimumHealthyPercent = null,
    double DesiredCount = null,
    object EnableEcsManagedTags = null,
    object EnableExecuteCommand = null,
    object ForceNewDeployment = null,
    double HealthCheckGracePeriodSeconds = null,
    string IamRole = null,
    string Id = null,
    string LaunchType = null,
    object LoadBalancer = null,
    EcsServiceNetworkConfiguration NetworkConfiguration = null,
    object OrderedPlacementStrategy = null,
    object PlacementConstraints = null,
    string PlatformVersion = null,
    string PropagateTags = null,
    string SchedulingStrategy = null,
    EcsServiceServiceConnectConfiguration ServiceConnectConfiguration = null,
    EcsServiceServiceRegistries ServiceRegistries = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TaskDefinition = null,
    EcsServiceTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null,
    object WaitForSteadyState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms">Alarms</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | alarms block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code>object</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster">Cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker">DeploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | deployment_circuit_breaker block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController">DeploymentController</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | deployment_controller block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent">DeploymentMaximumPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent">DeploymentMinimumHealthyPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount">DesiredCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment">ForceNewDeployment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds">HealthCheckGracePeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole">IamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType">LaunchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer">LoadBalancer</a></code> | <code>object</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy">OrderedPlacementStrategy</a></code> | <code>object</code> | ordered_placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints">PlacementConstraints</a></code> | <code>object</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags">PropagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy">SchedulingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration">ServiceConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | service_connect_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries">ServiceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | service_registries block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState">WaitForSteadyState</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.alarms"></a>

```csharp
public EcsServiceAlarms Alarms { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

alarms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#alarms EcsService#alarms}

---

##### `CapacityProviderStrategy`<sup>Optional</sup> <a name="CapacityProviderStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.capacityProviderStrategy"></a>

```csharp
public object CapacityProviderStrategy { get; set; }
```

- *Type:* object

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#cluster EcsService#cluster}.

---

##### `DeploymentCircuitBreaker`<sup>Optional</sup> <a name="DeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentCircuitBreaker"></a>

```csharp
public EcsServiceDeploymentCircuitBreaker DeploymentCircuitBreaker { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

deployment_circuit_breaker block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}

---

##### `DeploymentController`<sup>Optional</sup> <a name="DeploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentController"></a>

```csharp
public EcsServiceDeploymentController DeploymentController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

deployment_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_controller EcsService#deployment_controller}

---

##### `DeploymentMaximumPercent`<sup>Optional</sup> <a name="DeploymentMaximumPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMaximumPercent"></a>

```csharp
public double DeploymentMaximumPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}.

---

##### `DeploymentMinimumHealthyPercent`<sup>Optional</sup> <a name="DeploymentMinimumHealthyPercent" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.deploymentMinimumHealthyPercent"></a>

```csharp
public double DeploymentMinimumHealthyPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.

---

##### `DesiredCount`<sup>Optional</sup> <a name="DesiredCount" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.desiredCount"></a>

```csharp
public double DesiredCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#desired_count EcsService#desired_count}.

---

##### `EnableEcsManagedTags`<sup>Optional</sup> <a name="EnableEcsManagedTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableEcsManagedTags"></a>

```csharp
public object EnableEcsManagedTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.

---

##### `EnableExecuteCommand`<sup>Optional</sup> <a name="EnableExecuteCommand" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.enableExecuteCommand"></a>

```csharp
public object EnableExecuteCommand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable_execute_command EcsService#enable_execute_command}.

---

##### `ForceNewDeployment`<sup>Optional</sup> <a name="ForceNewDeployment" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.forceNewDeployment"></a>

```csharp
public object ForceNewDeployment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#force_new_deployment EcsService#force_new_deployment}.

---

##### `HealthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="HealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.healthCheckGracePeriodSeconds"></a>

```csharp
public double HealthCheckGracePeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.

---

##### `IamRole`<sup>Optional</sup> <a name="IamRole" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.iamRole"></a>

```csharp
public string IamRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#iam_role EcsService#iam_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#id EcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LaunchType`<sup>Optional</sup> <a name="LaunchType" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.launchType"></a>

```csharp
public string LaunchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#launch_type EcsService#launch_type}.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.loadBalancer"></a>

```csharp
public object LoadBalancer { get; set; }
```

- *Type:* object

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#load_balancer EcsService#load_balancer}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.networkConfiguration"></a>

```csharp
public EcsServiceNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#network_configuration EcsService#network_configuration}

---

##### `OrderedPlacementStrategy`<sup>Optional</sup> <a name="OrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.orderedPlacementStrategy"></a>

```csharp
public object OrderedPlacementStrategy { get; set; }
```

- *Type:* object

ordered_placement_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}

---

##### `PlacementConstraints`<sup>Optional</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.placementConstraints"></a>

```csharp
public object PlacementConstraints { get; set; }
```

- *Type:* object

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#placement_constraints EcsService#placement_constraints}

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#platform_version EcsService#platform_version}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.propagateTags"></a>

```csharp
public string PropagateTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#propagate_tags EcsService#propagate_tags}.

---

##### `SchedulingStrategy`<sup>Optional</sup> <a name="SchedulingStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.schedulingStrategy"></a>

```csharp
public string SchedulingStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#scheduling_strategy EcsService#scheduling_strategy}.

---

##### `ServiceConnectConfiguration`<sup>Optional</sup> <a name="ServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceConnectConfiguration"></a>

```csharp
public EcsServiceServiceConnectConfiguration ServiceConnectConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

service_connect_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_connect_configuration EcsService#service_connect_configuration}

---

##### `ServiceRegistries`<sup>Optional</sup> <a name="ServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.serviceRegistries"></a>

```csharp
public EcsServiceServiceRegistries ServiceRegistries { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

service_registries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service_registries EcsService#service_registries}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags EcsService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#tags_all EcsService#tags_all}.

---

##### `TaskDefinition`<sup>Optional</sup> <a name="TaskDefinition" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#task_definition EcsService#task_definition}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.timeouts"></a>

```csharp
public EcsServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts">EcsServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#timeouts EcsService#timeouts}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#triggers EcsService#triggers}.

---

##### `WaitForSteadyState`<sup>Optional</sup> <a name="WaitForSteadyState" id="@cdktf/provider-aws.ecsService.EcsServiceConfig.property.waitForSteadyState"></a>

```csharp
public object WaitForSteadyState { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}.

---

### EcsServiceDeploymentCircuitBreaker <a name="EcsServiceDeploymentCircuitBreaker" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceDeploymentCircuitBreaker {
    object Enable,
    object Rollback
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback">Rollback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enable EcsService#enable}.

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker.property.rollback"></a>

```csharp
public object Rollback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#rollback EcsService#rollback}.

---

### EcsServiceDeploymentController <a name="EcsServiceDeploymentController" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceDeploymentController {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentController.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

### EcsServiceLoadBalancer <a name="EcsServiceLoadBalancer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceLoadBalancer {
    string ContainerName,
    double ContainerPort,
    string ElbName = null,
    string TargetGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort">ContainerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName">ElbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}. |

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `ElbName`<sup>Optional</sup> <a name="ElbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.elbName"></a>

```csharp
public string ElbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#elb_name EcsService#elb_name}.

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancer.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#target_group_arn EcsService#target_group_arn}.

---

### EcsServiceNetworkConfiguration <a name="EcsServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceNetworkConfiguration {
    string[] Subnets,
    object AssignPublicIp = null,
    string[] SecurityGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}. |

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#subnets EcsService#subnets}.

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#assign_public_ip EcsService#assign_public_ip}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#security_groups EcsService#security_groups}.

---

### EcsServiceOrderedPlacementStrategy <a name="EcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceOrderedPlacementStrategy {
    string Type,
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field">Field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategy.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#field EcsService#field}.

---

### EcsServicePlacementConstraints <a name="EcsServicePlacementConstraints" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServicePlacementConstraints {
    string Type,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#type EcsService#type}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraints.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#expression EcsService#expression}.

---

### EcsServiceServiceConnectConfiguration <a name="EcsServiceServiceConnectConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfiguration {
    object Enabled,
    EcsServiceServiceConnectConfigurationLogConfiguration LogConfiguration = null,
    string Namespace = null,
    object Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service">Service</a></code> | <code>object</code> | service block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#enabled EcsService#enabled}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.logConfiguration"></a>

```csharp
public EcsServiceServiceConnectConfigurationLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_configuration EcsService#log_configuration}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#namespace EcsService#namespace}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration.property.service"></a>

```csharp
public object Service { get; set; }
```

- *Type:* object

service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#service EcsService#service}

---

### EcsServiceServiceConnectConfigurationLogConfiguration <a name="EcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationLogConfiguration {
    string LogDriver,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    object SecretOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver">LogDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption">SecretOption</a></code> | <code>object</code> | secret_option block. |

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.logDriver"></a>

```csharp
public string LogDriver { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#log_driver EcsService#log_driver}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#options EcsService#options}.

---

##### `SecretOption`<sup>Optional</sup> <a name="SecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration.property.secretOption"></a>

```csharp
public object SecretOption { get; set; }
```

- *Type:* object

secret_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#secret_option EcsService#secret_option}

---

### EcsServiceServiceConnectConfigurationLogConfigurationSecretOption <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationLogConfigurationSecretOption {
    string Name,
    string ValueFrom
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#name EcsService#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOption.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#value_from EcsService#value_from}.

---

### EcsServiceServiceConnectConfigurationService <a name="EcsServiceServiceConnectConfigurationService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationService {
    string PortName,
    EcsServiceServiceConnectConfigurationServiceClientAlias ClientAlias = null,
    string DiscoveryName = null,
    double IngressPortOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName">PortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias">ClientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | client_alias block. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName">DiscoveryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride">IngressPortOverride</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}. |

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port_name EcsService#port_name}.

---

##### `ClientAlias`<sup>Optional</sup> <a name="ClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.clientAlias"></a>

```csharp
public EcsServiceServiceConnectConfigurationServiceClientAlias ClientAlias { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

client_alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#client_alias EcsService#client_alias}

---

##### `DiscoveryName`<sup>Optional</sup> <a name="DiscoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.discoveryName"></a>

```csharp
public string DiscoveryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#discovery_name EcsService#discovery_name}.

---

##### `IngressPortOverride`<sup>Optional</sup> <a name="IngressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationService.property.ingressPortOverride"></a>

```csharp
public double IngressPortOverride { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#ingress_port_override EcsService#ingress_port_override}.

---

### EcsServiceServiceConnectConfigurationServiceClientAlias <a name="EcsServiceServiceConnectConfigurationServiceClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationServiceClientAlias {
    double Port,
    string DnsName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName">DnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#dns_name EcsService#dns_name}.

---

### EcsServiceServiceRegistries <a name="EcsServiceServiceRegistries" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceRegistries {
    string RegistryArn,
    string ContainerName = null,
    double ContainerPort = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn">RegistryArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort">ContainerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}. |

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.registryArn"></a>

```csharp
public string RegistryArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#registry_arn EcsService#registry_arn}.

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_name EcsService#container_name}.

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#container_port EcsService#container_port}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#port EcsService#port}.

---

### EcsServiceTimeouts <a name="EcsServiceTimeouts" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#create EcsService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#delete EcsService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service#update EcsService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsServiceAlarmsOutputReference <a name="EcsServiceAlarmsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput">AlarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput">RollbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback">Rollback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNamesInput`<sup>Optional</sup> <a name="AlarmNamesInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNamesInput"></a>

```csharp
public string[] AlarmNamesInput { get; }
```

- *Type:* string[]

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `RollbackInput`<sup>Optional</sup> <a name="RollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollbackInput"></a>

```csharp
public object RollbackInput { get; }
```

- *Type:* object

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.rollback"></a>

```csharp
public object Rollback { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceAlarmsOutputReference.property.internalValue"></a>

```csharp
public EcsServiceAlarms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceAlarms">EcsServiceAlarms</a>

---


### EcsServiceCapacityProviderStrategyList <a name="EcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get"></a>

```csharp
private EcsServiceCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceCapacityProviderStrategyOutputReference <a name="EcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetBase"></a>

```csharp
private void ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.baseInput"></a>

```csharp
public double BaseInput { get; }
```

- *Type:* double

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```csharp
public string CapacityProviderInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceDeploymentCircuitBreakerOutputReference <a name="EcsServiceDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceDeploymentCircuitBreakerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput">RollbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback">Rollback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `RollbackInput`<sup>Optional</sup> <a name="RollbackInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollbackInput"></a>

```csharp
public object RollbackInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```csharp
public object Rollback { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```csharp
public EcsServiceDeploymentCircuitBreaker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentCircuitBreaker">EcsServiceDeploymentCircuitBreaker</a>

---


### EcsServiceDeploymentControllerOutputReference <a name="EcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceDeploymentControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```csharp
public EcsServiceDeploymentController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceDeploymentController">EcsServiceDeploymentController</a>

---


### EcsServiceLoadBalancerList <a name="EcsServiceLoadBalancerList" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get"></a>

```csharp
private EcsServiceLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceLoadBalancerOutputReference <a name="EcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName">ResetElbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElbName` <a name="ResetElbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetElbName"></a>

```csharp
private void ResetElbName()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput">ElbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName">ElbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `ElbNameInput`<sup>Optional</sup> <a name="ElbNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbNameInput"></a>

```csharp
public string ElbNameInput { get; }
```

- *Type:* string

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `ElbName`<sup>Required</sup> <a name="ElbName" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.elbName"></a>

```csharp
public string ElbName { get; }
```

- *Type:* string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceNetworkConfigurationOutputReference <a name="EcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsServiceNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceNetworkConfiguration">EcsServiceNetworkConfiguration</a>

---


### EcsServiceOrderedPlacementStrategyList <a name="EcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceOrderedPlacementStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get"></a>

```csharp
private EcsServiceOrderedPlacementStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceOrderedPlacementStrategyOutputReference <a name="EcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceOrderedPlacementStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetField` <a name="ResetField" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServicePlacementConstraintsList <a name="EcsServicePlacementConstraintsList" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServicePlacementConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get"></a>

```csharp
private EcsServicePlacementConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServicePlacementConstraintsOutputReference <a name="EcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServicePlacementConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption">PutSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption">ResetSecretOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretOption` <a name="PutSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption"></a>

```csharp
private void PutSecretOption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* object

---

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSecretOption` <a name="ResetSecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resetSecretOption"></a>

```csharp
private void ResetSecretOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption">SecretOption</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput">LogDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput">SecretOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">LogDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretOption`<sup>Required</sup> <a name="SecretOption" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOption"></a>

```csharp
public EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList SecretOption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList">EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList</a>

---

##### `LogDriverInput`<sup>Optional</sup> <a name="LogDriverInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriverInput"></a>

```csharp
public string LogDriverInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretOptionInput`<sup>Optional</sup> <a name="SecretOptionInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptionInput"></a>

```csharp
public object SecretOptionInput { get; }
```

- *Type:* object

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```csharp
public string LogDriver { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsServiceServiceConnectConfigurationLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get"></a>

```csharp
private EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference <a name="EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceServiceConnectConfigurationOutputReference <a name="EcsServiceServiceConnectConfigurationOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(EcsServiceServiceConnectConfigurationLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `PutService` <a name="PutService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService"></a>

```csharp
private void PutService(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.putService.parameter.value"></a>

- *Type:* object

---

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput">ServiceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```csharp
public EcsServiceServiceConnectConfigurationLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfigurationOutputReference">EcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.service"></a>

```csharp
public EcsServiceServiceConnectConfigurationServiceList Service { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList">EcsServiceServiceConnectConfigurationServiceList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.logConfigurationInput"></a>

```csharp
public EcsServiceServiceConnectConfigurationLogConfiguration LogConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationLogConfiguration">EcsServiceServiceConnectConfigurationLogConfiguration</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.serviceInput"></a>

```csharp
public object ServiceInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsServiceServiceConnectConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfiguration">EcsServiceServiceConnectConfiguration</a>

---


### EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference <a name="EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName">ResetDnsName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsName` <a name="ResetDnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.resetDnsName"></a>

```csharp
private void ResetDnsName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference.property.internalValue"></a>

```csharp
public EcsServiceServiceConnectConfigurationServiceClientAlias InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---


### EcsServiceServiceConnectConfigurationServiceList <a name="EcsServiceServiceConnectConfigurationServiceList" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get"></a>

```csharp
private EcsServiceServiceConnectConfigurationServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceServiceConnectConfigurationServiceOutputReference <a name="EcsServiceServiceConnectConfigurationServiceOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceConnectConfigurationServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias">PutClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias">ResetClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName">ResetDiscoveryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride">ResetIngressPortOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientAlias` <a name="PutClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias"></a>

```csharp
private void PutClientAlias(EcsServiceServiceConnectConfigurationServiceClientAlias Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.putClientAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `ResetClientAlias` <a name="ResetClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetClientAlias"></a>

```csharp
private void ResetClientAlias()
```

##### `ResetDiscoveryName` <a name="ResetDiscoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetDiscoveryName"></a>

```csharp
private void ResetDiscoveryName()
```

##### `ResetIngressPortOverride` <a name="ResetIngressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.resetIngressPortOverride"></a>

```csharp
private void ResetIngressPortOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias">ClientAlias</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput">ClientAliasInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput">DiscoveryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput">IngressPortOverrideInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName">DiscoveryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride">IngressPortOverride</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAlias`<sup>Required</sup> <a name="ClientAlias" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAlias"></a>

```csharp
public EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference ClientAlias { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference">EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference</a>

---

##### `ClientAliasInput`<sup>Optional</sup> <a name="ClientAliasInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.clientAliasInput"></a>

```csharp
public EcsServiceServiceConnectConfigurationServiceClientAlias ClientAliasInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceClientAlias">EcsServiceServiceConnectConfigurationServiceClientAlias</a>

---

##### `DiscoveryNameInput`<sup>Optional</sup> <a name="DiscoveryNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryNameInput"></a>

```csharp
public string DiscoveryNameInput { get; }
```

- *Type:* string

---

##### `IngressPortOverrideInput`<sup>Optional</sup> <a name="IngressPortOverrideInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverrideInput"></a>

```csharp
public double IngressPortOverrideInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `DiscoveryName`<sup>Required</sup> <a name="DiscoveryName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.discoveryName"></a>

```csharp
public string DiscoveryName { get; }
```

- *Type:* string

---

##### `IngressPortOverride`<sup>Required</sup> <a name="IngressPortOverride" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.ingressPortOverride"></a>

```csharp
public double IngressPortOverride { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceConnectConfigurationServiceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsServiceServiceRegistriesOutputReference <a name="EcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceServiceRegistriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput">RegistryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn">RegistryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RegistryArnInput`<sup>Optional</sup> <a name="RegistryArnInput" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArnInput"></a>

```csharp
public string RegistryArnInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```csharp
public string RegistryArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```csharp
public EcsServiceServiceRegistries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsService.EcsServiceServiceRegistries">EcsServiceServiceRegistries</a>

---


### EcsServiceTimeoutsOutputReference <a name="EcsServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsService.EcsServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



