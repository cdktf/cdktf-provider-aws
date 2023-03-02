# `spotFleetRequest` Submodule <a name="`spotFleetRequest` Submodule" id="@cdktf/provider-aws.spotFleetRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotFleetRequest <a name="SpotFleetRequest" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request aws_spot_fleet_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequest(Construct Scope, string Id, SpotFleetRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig">SpotFleetRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig">SpotFleetRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification">PutLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig">PutLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies">PutSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy">ResetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour">ResetInstanceInterruptionBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification">ResetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig">ResetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy">ResetOnDemandAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice">ResetOnDemandMaxTotalPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity">ResetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances">ResetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies">ResetSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType">ResetTargetCapacityUnitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns">ResetTargetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete">ResetTerminateInstancesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration">ResetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom">ResetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil">ResetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment">ResetWaitForFulfillment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLaunchSpecification` <a name="PutLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification"></a>

```csharp
private void PutLaunchSpecification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchSpecification.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchTemplateConfig` <a name="PutLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig"></a>

```csharp
private void PutLaunchTemplateConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* object

---

##### `PutSpotMaintenanceStrategies` <a name="PutSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies"></a>

```csharp
private void PutSpotMaintenanceStrategies(SpotFleetRequestSpotMaintenanceStrategies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(SpotFleetRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetExcessCapacityTerminationPolicy` <a name="ResetExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy"></a>

```csharp
private void ResetExcessCapacityTerminationPolicy()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetFleetType"></a>

```csharp
private void ResetFleetType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceInterruptionBehaviour` <a name="ResetInstanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour"></a>

```csharp
private void ResetInstanceInterruptionBehaviour()
```

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```

##### `ResetLaunchSpecification` <a name="ResetLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification"></a>

```csharp
private void ResetLaunchSpecification()
```

##### `ResetLaunchTemplateConfig` <a name="ResetLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig"></a>

```csharp
private void ResetLaunchTemplateConfig()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetLoadBalancers"></a>

```csharp
private void ResetLoadBalancers()
```

##### `ResetOnDemandAllocationStrategy` <a name="ResetOnDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy"></a>

```csharp
private void ResetOnDemandAllocationStrategy()
```

##### `ResetOnDemandMaxTotalPrice` <a name="ResetOnDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice"></a>

```csharp
private void ResetOnDemandMaxTotalPrice()
```

##### `ResetOnDemandTargetCapacity` <a name="ResetOnDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity"></a>

```csharp
private void ResetOnDemandTargetCapacity()
```

##### `ResetReplaceUnhealthyInstances` <a name="ResetReplaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances"></a>

```csharp
private void ResetReplaceUnhealthyInstances()
```

##### `ResetSpotMaintenanceStrategies` <a name="ResetSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies"></a>

```csharp
private void ResetSpotMaintenanceStrategies()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetSpotPrice"></a>

```csharp
private void ResetSpotPrice()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetCapacityUnitType` <a name="ResetTargetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetCapacityUnitType"></a>

```csharp
private void ResetTargetCapacityUnitType()
```

##### `ResetTargetGroupArns` <a name="ResetTargetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns"></a>

```csharp
private void ResetTargetGroupArns()
```

##### `ResetTerminateInstancesOnDelete` <a name="ResetTerminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesOnDelete"></a>

```csharp
private void ResetTerminateInstancesOnDelete()
```

##### `ResetTerminateInstancesWithExpiration` <a name="ResetTerminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration"></a>

```csharp
private void ResetTerminateInstancesWithExpiration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidFrom` <a name="ResetValidFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidFrom"></a>

```csharp
private void ResetValidFrom()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetValidUntil"></a>

```csharp
private void ResetValidUntil()
```

##### `ResetWaitForFulfillment` <a name="ResetWaitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment"></a>

```csharp
private void ResetWaitForFulfillment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SpotFleetRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SpotFleetRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SpotFleetRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification">LaunchSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig">LaunchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies">SpotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState">SpotRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput">ExcessCapacityTerminationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput">FleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput">IamFleetRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput">InstanceInterruptionBehaviourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput">LaunchSpecificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput">LaunchTemplateConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput">OnDemandAllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput">OnDemandMaxTotalPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput">OnDemandTargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput">ReplaceUnhealthyInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput">SpotMaintenanceStrategiesInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput">SpotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput">TargetCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput">TargetCapacityUnitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput">TargetGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput">TerminateInstancesOnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput">TerminateInstancesWithExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput">ValidFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput">ValidUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput">WaitForFulfillmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType">FleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole">IamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour">InstanceInterruptionBehaviour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers">LoadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy">OnDemandAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice">OnDemandMaxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice">SpotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity">TargetCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns">TargetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete">TerminateInstancesOnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom">ValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil">ValidUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment">WaitForFulfillment</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LaunchSpecification`<sup>Required</sup> <a name="LaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecification"></a>

```csharp
public SpotFleetRequestLaunchSpecificationList LaunchSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a>

---

##### `LaunchTemplateConfig`<sup>Required</sup> <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigList LaunchTemplateConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a>

---

##### `SpotMaintenanceStrategies`<sup>Required</sup> <a name="SpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategiesOutputReference SpotMaintenanceStrategies { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a>

---

##### `SpotRequestState`<sup>Required</sup> <a name="SpotRequestState" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotRequestState"></a>

```csharp
public string SpotRequestState { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeouts"></a>

```csharp
public SpotFleetRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `ExcessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput"></a>

```csharp
public string ExcessCapacityTerminationPolicyInput { get; }
```

- *Type:* string

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput"></a>

```csharp
public string FleetTypeInput { get; }
```

- *Type:* string

---

##### `IamFleetRoleInput`<sup>Optional</sup> <a name="IamFleetRoleInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput"></a>

```csharp
public string IamFleetRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInterruptionBehaviourInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviourInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput"></a>

```csharp
public string InstanceInterruptionBehaviourInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `LaunchSpecificationInput`<sup>Optional</sup> <a name="LaunchSpecificationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput"></a>

```csharp
public object LaunchSpecificationInput { get; }
```

- *Type:* object

---

##### `LaunchTemplateConfigInput`<sup>Optional</sup> <a name="LaunchTemplateConfigInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput"></a>

```csharp
public object LaunchTemplateConfigInput { get; }
```

- *Type:* object

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput"></a>

```csharp
public string[] LoadBalancersInput { get; }
```

- *Type:* string[]

---

##### `OnDemandAllocationStrategyInput`<sup>Optional</sup> <a name="OnDemandAllocationStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput"></a>

```csharp
public string OnDemandAllocationStrategyInput { get; }
```

- *Type:* string

---

##### `OnDemandMaxTotalPriceInput`<sup>Optional</sup> <a name="OnDemandMaxTotalPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput"></a>

```csharp
public string OnDemandMaxTotalPriceInput { get; }
```

- *Type:* string

---

##### `OnDemandTargetCapacityInput`<sup>Optional</sup> <a name="OnDemandTargetCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput"></a>

```csharp
public double OnDemandTargetCapacityInput { get; }
```

- *Type:* double

---

##### `ReplaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="ReplaceUnhealthyInstancesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput"></a>

```csharp
public object ReplaceUnhealthyInstancesInput { get; }
```

- *Type:* object

---

##### `SpotMaintenanceStrategiesInput`<sup>Optional</sup> <a name="SpotMaintenanceStrategiesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategies SpotMaintenanceStrategiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPriceInput"></a>

```csharp
public string SpotPriceInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetCapacityInput`<sup>Optional</sup> <a name="TargetCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput"></a>

```csharp
public double TargetCapacityInput { get; }
```

- *Type:* double

---

##### `TargetCapacityUnitTypeInput`<sup>Optional</sup> <a name="TargetCapacityUnitTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitTypeInput"></a>

```csharp
public string TargetCapacityUnitTypeInput { get; }
```

- *Type:* string

---

##### `TargetGroupArnsInput`<sup>Optional</sup> <a name="TargetGroupArnsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput"></a>

```csharp
public string[] TargetGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `TerminateInstancesOnDeleteInput`<sup>Optional</sup> <a name="TerminateInstancesOnDeleteInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDeleteInput"></a>

```csharp
public string TerminateInstancesOnDeleteInput { get; }
```

- *Type:* string

---

##### `TerminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="TerminateInstancesWithExpirationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput"></a>

```csharp
public object TerminateInstancesWithExpirationInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidFromInput`<sup>Optional</sup> <a name="ValidFromInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFromInput"></a>

```csharp
public string ValidFromInput { get; }
```

- *Type:* string

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntilInput"></a>

```csharp
public string ValidUntilInput { get; }
```

- *Type:* string

---

##### `WaitForFulfillmentInput`<sup>Optional</sup> <a name="WaitForFulfillmentInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput"></a>

```csharp
public object WaitForFulfillmentInput { get; }
```

- *Type:* object

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `ExcessCapacityTerminationPolicy`<sup>Required</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy"></a>

```csharp
public string ExcessCapacityTerminationPolicy { get; }
```

- *Type:* string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.fleetType"></a>

```csharp
public string FleetType { get; }
```

- *Type:* string

---

##### `IamFleetRole`<sup>Required</sup> <a name="IamFleetRole" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.iamFleetRole"></a>

```csharp
public string IamFleetRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceInterruptionBehaviour`<sup>Required</sup> <a name="InstanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour"></a>

```csharp
public string InstanceInterruptionBehaviour { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.loadBalancers"></a>

```csharp
public string[] LoadBalancers { get; }
```

- *Type:* string[]

---

##### `OnDemandAllocationStrategy`<sup>Required</sup> <a name="OnDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy"></a>

```csharp
public string OnDemandAllocationStrategy { get; }
```

- *Type:* string

---

##### `OnDemandMaxTotalPrice`<sup>Required</sup> <a name="OnDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice"></a>

```csharp
public string OnDemandMaxTotalPrice { get; }
```

- *Type:* string

---

##### `OnDemandTargetCapacity`<sup>Required</sup> <a name="OnDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity"></a>

```csharp
public double OnDemandTargetCapacity { get; }
```

- *Type:* double

---

##### `ReplaceUnhealthyInstances`<sup>Required</sup> <a name="ReplaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances"></a>

```csharp
public object ReplaceUnhealthyInstances { get; }
```

- *Type:* object

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.spotPrice"></a>

```csharp
public string SpotPrice { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetCapacity`<sup>Required</sup> <a name="TargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacity"></a>

```csharp
public double TargetCapacity { get; }
```

- *Type:* double

---

##### `TargetCapacityUnitType`<sup>Required</sup> <a name="TargetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetCapacityUnitType"></a>

```csharp
public string TargetCapacityUnitType { get; }
```

- *Type:* string

---

##### `TargetGroupArns`<sup>Required</sup> <a name="TargetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.targetGroupArns"></a>

```csharp
public string[] TargetGroupArns { get; }
```

- *Type:* string[]

---

##### `TerminateInstancesOnDelete`<sup>Required</sup> <a name="TerminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesOnDelete"></a>

```csharp
public string TerminateInstancesOnDelete { get; }
```

- *Type:* string

---

##### `TerminateInstancesWithExpiration`<sup>Required</sup> <a name="TerminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration"></a>

```csharp
public object TerminateInstancesWithExpiration { get; }
```

- *Type:* object

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validFrom"></a>

```csharp
public string ValidFrom { get; }
```

- *Type:* string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.validUntil"></a>

```csharp
public string ValidUntil { get; }
```

- *Type:* string

---

##### `WaitForFulfillment`<sup>Required</sup> <a name="WaitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment"></a>

```csharp
public object WaitForFulfillment { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotFleetRequestConfig <a name="SpotFleetRequestConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IamFleetRole,
    double TargetCapacity,
    string AllocationStrategy = null,
    string ExcessCapacityTerminationPolicy = null,
    string FleetType = null,
    string Id = null,
    string InstanceInterruptionBehaviour = null,
    double InstancePoolsToUseCount = null,
    object LaunchSpecification = null,
    object LaunchTemplateConfig = null,
    string[] LoadBalancers = null,
    string OnDemandAllocationStrategy = null,
    string OnDemandMaxTotalPrice = null,
    double OnDemandTargetCapacity = null,
    object ReplaceUnhealthyInstances = null,
    SpotFleetRequestSpotMaintenanceStrategies SpotMaintenanceStrategies = null,
    string SpotPrice = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TargetCapacityUnitType = null,
    string[] TargetGroupArns = null,
    string TerminateInstancesOnDelete = null,
    object TerminateInstancesWithExpiration = null,
    SpotFleetRequestTimeouts Timeouts = null,
    string ValidFrom = null,
    string ValidUntil = null,
    object WaitForFulfillment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole">IamFleetRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity">TargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy">ExcessCapacityTerminationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType">FleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour">InstanceInterruptionBehaviour</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification">LaunchSpecification</a></code> | <code>object</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig">LaunchTemplateConfig</a></code> | <code>object</code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers">LoadBalancers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy">OnDemandAllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice">OnDemandMaxTotalPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity">OnDemandTargetCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances">ReplaceUnhealthyInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies">SpotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice">SpotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType">TargetCapacityUnitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns">TargetGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete">TerminateInstancesOnDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration">TerminateInstancesWithExpiration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom">ValidFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil">ValidUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment">WaitForFulfillment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IamFleetRole`<sup>Required</sup> <a name="IamFleetRole" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole"></a>

```csharp
public string IamFleetRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `TargetCapacity`<sup>Required</sup> <a name="TargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity"></a>

```csharp
public double TargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `ExcessCapacityTerminationPolicy`<sup>Optional</sup> <a name="ExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy"></a>

```csharp
public string ExcessCapacityTerminationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.fleetType"></a>

```csharp
public string FleetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceInterruptionBehaviour`<sup>Optional</sup> <a name="InstanceInterruptionBehaviour" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour"></a>

```csharp
public string InstanceInterruptionBehaviour { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `LaunchSpecification`<sup>Optional</sup> <a name="LaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification"></a>

```csharp
public object LaunchSpecification { get; set; }
```

- *Type:* object

launch_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `LaunchTemplateConfig`<sup>Optional</sup> <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig"></a>

```csharp
public object LaunchTemplateConfig { get; set; }
```

- *Type:* object

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers"></a>

```csharp
public string[] LoadBalancers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `OnDemandAllocationStrategy`<sup>Optional</sup> <a name="OnDemandAllocationStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy"></a>

```csharp
public string OnDemandAllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `OnDemandMaxTotalPrice`<sup>Optional</sup> <a name="OnDemandMaxTotalPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice"></a>

```csharp
public string OnDemandMaxTotalPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `OnDemandTargetCapacity`<sup>Optional</sup> <a name="OnDemandTargetCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity"></a>

```csharp
public double OnDemandTargetCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `ReplaceUnhealthyInstances`<sup>Optional</sup> <a name="ReplaceUnhealthyInstances" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances"></a>

```csharp
public object ReplaceUnhealthyInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `SpotMaintenanceStrategies`<sup>Optional</sup> <a name="SpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategies SpotMaintenanceStrategies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice"></a>

```csharp
public string SpotPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `TargetCapacityUnitType`<sup>Optional</sup> <a name="TargetCapacityUnitType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacityUnitType"></a>

```csharp
public string TargetCapacityUnitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}.

---

##### `TargetGroupArns`<sup>Optional</sup> <a name="TargetGroupArns" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns"></a>

```csharp
public string[] TargetGroupArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `TerminateInstancesOnDelete`<sup>Optional</sup> <a name="TerminateInstancesOnDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesOnDelete"></a>

```csharp
public string TerminateInstancesOnDelete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}.

---

##### `TerminateInstancesWithExpiration`<sup>Optional</sup> <a name="TerminateInstancesWithExpiration" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration"></a>

```csharp
public object TerminateInstancesWithExpiration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.timeouts"></a>

```csharp
public SpotFleetRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `ValidFrom`<sup>Optional</sup> <a name="ValidFrom" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validFrom"></a>

```csharp
public string ValidFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.validUntil"></a>

```csharp
public string ValidUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `WaitForFulfillment`<sup>Optional</sup> <a name="WaitForFulfillment" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment"></a>

```csharp
public object WaitForFulfillment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

### SpotFleetRequestLaunchSpecification <a name="SpotFleetRequestLaunchSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecification {
    string Ami,
    string InstanceType,
    object AssociatePublicIpAddress = null,
    string AvailabilityZone = null,
    object EbsBlockDevice = null,
    object EbsOptimized = null,
    object EphemeralBlockDevice = null,
    string IamInstanceProfile = null,
    string IamInstanceProfileArn = null,
    string KeyName = null,
    object Monitoring = null,
    string PlacementGroup = null,
    string PlacementTenancy = null,
    object RootBlockDevice = null,
    string SpotPrice = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string UserData = null,
    string[] VpcSecurityGroupIds = null,
    string WeightedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami">Ami</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code>object</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code>object</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring">Monitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice">RootBlockDevice</a></code> | <code>object</code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice">SpotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity">WeightedCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `Ami`<sup>Required</sup> <a name="Ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami"></a>

```csharp
public string Ami { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ami SpotFleetRequest#ami}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `EbsBlockDevice`<sup>Optional</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice"></a>

```csharp
public object EbsBlockDevice { get; set; }
```

- *Type:* object

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}.

---

##### `EphemeralBlockDevice`<sup>Optional</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice"></a>

```csharp
public object EphemeralBlockDevice { get; set; }
```

- *Type:* object

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}.

---

##### `IamInstanceProfileArn`<sup>Optional</sup> <a name="IamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn"></a>

```csharp
public string IamInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#key_name SpotFleetRequest#key_name}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring"></a>

```csharp
public object Monitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#monitoring SpotFleetRequest#monitoring}.

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_group SpotFleetRequest#placement_group}.

---

##### `PlacementTenancy`<sup>Optional</sup> <a name="PlacementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}.

---

##### `RootBlockDevice`<sup>Optional</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice"></a>

```csharp
public object RootBlockDevice { get; set; }
```

- *Type:* object

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice"></a>

```csharp
public string SpotPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#user_data SpotFleetRequest#user_data}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity"></a>

```csharp
public string WeightedCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchSpecificationEbsBlockDevice <a name="SpotFleetRequestLaunchSpecificationEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    string DeviceName,
    object DeleteOnTermination = null,
    object Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchSpecificationEphemeralBlockDevice <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    string DeviceName,
    string VirtualName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}.

---

### SpotFleetRequestLaunchSpecificationRootBlockDevice <a name="SpotFleetRequestLaunchSpecificationRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationRootBlockDevice {
    object DeleteOnTermination = null,
    object Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchTemplateConfig <a name="SpotFleetRequestLaunchTemplateConfig" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfig {
    SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification LaunchTemplateSpecification,
    object Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides">Overrides</a></code> | <code>object</code> | overrides block. |

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification LaunchTemplateSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides"></a>

```csharp
public object Overrides { get; set; }
```

- *Type:* object

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#overrides SpotFleetRequest#overrides}

---

### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    string Id = null,
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#name SpotFleetRequest#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#version SpotFleetRequest#version}.

---

### SpotFleetRequestLaunchTemplateConfigOverrides <a name="SpotFleetRequestLaunchTemplateConfigOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverrides {
    string AvailabilityZone = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements InstanceRequirements = null,
    string InstanceType = null,
    double Priority = null,
    string SpotPrice = null,
    string SubnetId = null,
    double WeightedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice">SpotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity">WeightedCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceRequirements"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements InstanceRequirements { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_requirements SpotFleetRequest#instance_requirements}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#priority SpotFleetRequest#priority}.

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice"></a>

```csharp
public string SpotPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `WeightedCapacity`<sup>Optional</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity"></a>

```csharp
public double WeightedCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements {
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount AcceleratorCount = null,
    string[] AcceleratorManufacturers = null,
    string[] AcceleratorNames = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMib = null,
    string[] AcceleratorTypes = null,
    string BareMetal = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps = null,
    string BurstablePerformance = null,
    string[] CpuManufacturers = null,
    string[] ExcludedInstanceTypes = null,
    string[] InstanceGenerations = null,
    string LocalStorage = null,
    string[] LocalStorageTypes = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpu = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib MemoryMib = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount = null,
    double OnDemandMaxPricePercentageOverLowestPrice = null,
    object RequireHibernateSupport = null,
    double SpotMaxPricePercentageOverLowestPrice = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb = null,
    SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount VcpuCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal">BareMetal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage">LocalStorage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount AcceleratorCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_count SpotFleetRequest#accelerator_count}

---

##### `AcceleratorManufacturers`<sup>Optional</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}.

---

##### `AcceleratorNames`<sup>Optional</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}.

---

##### `AcceleratorTotalMemoryMib`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMib { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_total_memory_mib SpotFleetRequest#accelerator_total_memory_mib}

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}.

---

##### `BareMetal`<sup>Optional</sup> <a name="BareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.bareMetal"></a>

```csharp
public string BareMetal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}.

---

##### `BaselineEbsBandwidthMbps`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#baseline_ebs_bandwidth_mbps SpotFleetRequest#baseline_ebs_bandwidth_mbps}

---

##### `BurstablePerformance`<sup>Optional</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}.

---

##### `CpuManufacturers`<sup>Optional</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}.

---

##### `InstanceGenerations`<sup>Optional</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}.

---

##### `LocalStorage`<sup>Optional</sup> <a name="LocalStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorage"></a>

```csharp
public string LocalStorage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage SpotFleetRequest#local_storage}.

---

##### `LocalStorageTypes`<sup>Optional</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}.

---

##### `MemoryGibPerVcpu`<sup>Optional</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryGibPerVcpu"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpu { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_gib_per_vcpu SpotFleetRequest#memory_gib_per_vcpu}

---

##### `MemoryMib`<sup>Optional</sup> <a name="MemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.memoryMib"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib MemoryMib { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#memory_mib SpotFleetRequest#memory_mib}

---

##### `NetworkInterfaceCount`<sup>Optional</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.networkInterfaceCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#network_interface_count SpotFleetRequest#network_interface_count}

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}.

---

##### `RequireHibernateSupport`<sup>Optional</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.requireHibernateSupport"></a>

```csharp
public object RequireHibernateSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}.

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}.

---

##### `TotalLocalStorageGb`<sup>Optional</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.totalLocalStorageGb"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#total_local_storage_gb SpotFleetRequest#total_local_storage_gb}

---

##### `VcpuCount`<sup>Optional</sup> <a name="VcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements.property.vcpuCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount VcpuCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#vcpu_count SpotFleetRequest#vcpu_count}

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#max SpotFleetRequest#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#min SpotFleetRequest#min}.

---

### SpotFleetRequestSpotMaintenanceStrategies <a name="SpotFleetRequestSpotMaintenanceStrategies" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestSpotMaintenanceStrategies {
    SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance CapacityRebalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `CapacityRebalance`<sup>Optional</sup> <a name="CapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance CapacityRebalance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}

---

### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    string ReplacementStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}. |

---

##### `ReplacementStrategy`<sup>Optional</sup> <a name="ReplacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}.

---

### SpotFleetRequestTimeouts <a name="SpotFleetRequestTimeouts" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#create SpotFleetRequest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#delete SpotFleetRequest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request#update SpotFleetRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotFleetRequestLaunchSpecificationEbsBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEbsBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get"></a>

```csharp
private SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get"></a>

```csharp
private SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationList <a name="SpotFleetRequestLaunchSpecificationList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get"></a>

```csharp
private SpotFleetRequestLaunchSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationOutputReference <a name="SpotFleetRequestLaunchSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice">PutEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice">PutEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice">PutRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice">ResetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice">ResetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn">ResetIamInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy">ResetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice">ResetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsBlockDevice` <a name="PutEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice"></a>

```csharp
private void PutEbsBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutEphemeralBlockDevice` <a name="PutEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice"></a>

```csharp
private void PutEphemeralBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutRootBlockDevice` <a name="PutRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice"></a>

```csharp
private void PutRootBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetEbsBlockDevice` <a name="ResetEbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice"></a>

```csharp
private void ResetEbsBlockDevice()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetEphemeralBlockDevice` <a name="ResetEphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice"></a>

```csharp
private void ResetEphemeralBlockDevice()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetIamInstanceProfileArn` <a name="ResetIamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn"></a>

```csharp
private void ResetIamInstanceProfileArn()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup"></a>

```csharp
private void ResetPlacementGroup()
```

##### `ResetPlacementTenancy` <a name="ResetPlacementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy"></a>

```csharp
private void ResetPlacementTenancy()
```

##### `ResetRootBlockDevice` <a name="ResetRootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice"></a>

```csharp
private void ResetRootBlockDevice()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice"></a>

```csharp
private void ResetSpotPrice()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity"></a>

```csharp
private void ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice">RootBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput">AmiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput">EbsBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput">EphemeralBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput">IamInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput">PlacementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput">PlacementTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput">RootBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput">SpotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami">Ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring">Monitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice">SpotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsBlockDevice`<sup>Required</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice"></a>

```csharp
public SpotFleetRequestLaunchSpecificationEbsBlockDeviceList EbsBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a>

---

##### `EphemeralBlockDevice`<sup>Required</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice"></a>

```csharp
public SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList EphemeralBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a>

---

##### `RootBlockDevice`<sup>Required</sup> <a name="RootBlockDevice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice"></a>

```csharp
public SpotFleetRequestLaunchSpecificationRootBlockDeviceList RootBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a>

---

##### `AmiInput`<sup>Optional</sup> <a name="AmiInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput"></a>

```csharp
public string AmiInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `EbsBlockDeviceInput`<sup>Optional</sup> <a name="EbsBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput"></a>

```csharp
public object EbsBlockDeviceInput { get; }
```

- *Type:* object

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `EphemeralBlockDeviceInput`<sup>Optional</sup> <a name="EphemeralBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput"></a>

```csharp
public object EphemeralBlockDeviceInput { get; }
```

- *Type:* object

---

##### `IamInstanceProfileArnInput`<sup>Optional</sup> <a name="IamInstanceProfileArnInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput"></a>

```csharp
public string IamInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput"></a>

```csharp
public object MonitoringInput { get; }
```

- *Type:* object

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput"></a>

```csharp
public string PlacementGroupInput { get; }
```

- *Type:* string

---

##### `PlacementTenancyInput`<sup>Optional</sup> <a name="PlacementTenancyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput"></a>

```csharp
public string PlacementTenancyInput { get; }
```

- *Type:* string

---

##### `RootBlockDeviceInput`<sup>Optional</sup> <a name="RootBlockDeviceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput"></a>

```csharp
public object RootBlockDeviceInput { get; }
```

- *Type:* object

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput"></a>

```csharp
public string SpotPriceInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput"></a>

```csharp
public string WeightedCapacityInput { get; }
```

- *Type:* string

---

##### `Ami`<sup>Required</sup> <a name="Ami" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami"></a>

```csharp
public string Ami { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `IamInstanceProfileArn`<sup>Required</sup> <a name="IamInstanceProfileArn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn"></a>

```csharp
public string IamInstanceProfileArn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring"></a>

```csharp
public object Monitoring { get; }
```

- *Type:* object

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; }
```

- *Type:* string

---

##### `PlacementTenancy`<sup>Required</sup> <a name="PlacementTenancy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; }
```

- *Type:* string

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice"></a>

```csharp
public string SpotPrice { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity"></a>

```csharp
public string WeightedCapacity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationRootBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get"></a>

```csharp
private SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### SpotFleetRequestLaunchTemplateConfigList <a name="SpotFleetRequestLaunchTemplateConfigList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get"></a>

```csharp
private SpotFleetRequestLaunchTemplateConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchTemplateConfigOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">PutLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchTemplateSpecification` <a name="PutLaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```csharp
private void PutLaunchTemplateSpecification(SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* object

---

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">LaunchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">LaunchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput">OverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateSpecification`<sup>Required</sup> <a name="LaunchTemplateSpecification" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference LaunchTemplateSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a>

---

##### `LaunchTemplateSpecificationInput`<sup>Optional</sup> <a name="LaunchTemplateSpecificationInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification LaunchTemplateSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput"></a>

```csharp
public object OverridesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">PutAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">PutBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu">PutMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib">PutMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount">PutNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb">PutTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount">PutVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers">ResetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames">ResetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">ResetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal">ResetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">ResetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance">ResetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers">ResetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations">ResetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage">ResetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes">ResetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">ResetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib">ResetMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount">ResetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">ResetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport">ResetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">ResetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb">ResetTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount">ResetVcpuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```csharp
private void PutAcceleratorCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMib` <a name="PutAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```csharp
private void PutAcceleratorTotalMemoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `PutBaselineEbsBandwidthMbps` <a name="PutBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```csharp
private void PutBaselineEbsBandwidthMbps(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `PutMemoryGibPerVcpu` <a name="PutMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```csharp
private void PutMemoryGibPerVcpu(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `PutMemoryMib` <a name="PutMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib"></a>

```csharp
private void PutMemoryMib(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---

##### `PutNetworkInterfaceCount` <a name="PutNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```csharp
private void PutNetworkInterfaceCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `PutTotalLocalStorageGb` <a name="PutTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```csharp
private void PutTotalLocalStorageGb(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `PutVcpuCount` <a name="PutVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount"></a>

```csharp
private void PutVcpuCount(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorManufacturers` <a name="ResetAcceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```csharp
private void ResetAcceleratorManufacturers()
```

##### `ResetAcceleratorNames` <a name="ResetAcceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```csharp
private void ResetAcceleratorNames()
```

##### `ResetAcceleratorTotalMemoryMib` <a name="ResetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```csharp
private void ResetAcceleratorTotalMemoryMib()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetBareMetal` <a name="ResetBareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBareMetal"></a>

```csharp
private void ResetBareMetal()
```

##### `ResetBaselineEbsBandwidthMbps` <a name="ResetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```csharp
private void ResetBaselineEbsBandwidthMbps()
```

##### `ResetBurstablePerformance` <a name="ResetBurstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```csharp
private void ResetBurstablePerformance()
```

##### `ResetCpuManufacturers` <a name="ResetCpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```csharp
private void ResetCpuManufacturers()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```

##### `ResetInstanceGenerations` <a name="ResetInstanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```csharp
private void ResetInstanceGenerations()
```

##### `ResetLocalStorage` <a name="ResetLocalStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorage"></a>

```csharp
private void ResetLocalStorage()
```

##### `ResetLocalStorageTypes` <a name="ResetLocalStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```csharp
private void ResetLocalStorageTypes()
```

##### `ResetMemoryGibPerVcpu` <a name="ResetMemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```csharp
private void ResetMemoryGibPerVcpu()
```

##### `ResetMemoryMib` <a name="ResetMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetMemoryMib"></a>

```csharp
private void ResetMemoryMib()
```

##### `ResetNetworkInterfaceCount` <a name="ResetNetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```csharp
private void ResetNetworkInterfaceCount()
```

##### `ResetOnDemandMaxPricePercentageOverLowestPrice` <a name="ResetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `ResetRequireHibernateSupport` <a name="ResetRequireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```csharp
private void ResetRequireHibernateSupport()
```

##### `ResetSpotMaxPricePercentageOverLowestPrice` <a name="ResetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetSpotMaxPricePercentageOverLowestPrice()
```

##### `ResetTotalLocalStorageGb` <a name="ResetTotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```csharp
private void ResetTotalLocalStorageGb()
```

##### `ResetVcpuCount` <a name="ResetVcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.resetVcpuCount"></a>

```csharp
private void ResetVcpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">AcceleratorManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput">AcceleratorNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">AcceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput">BareMetalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">BaselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput">BurstablePerformanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput">CpuManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput">InstanceGenerationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput">LocalStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput">LocalStorageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">MemoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput">MemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput">NetworkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">OnDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput">RequireHibernateSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">SpotMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">TotalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference AcceleratorCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMib`<sup>Required</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference AcceleratorTotalMemoryMib { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference BaselineEbsBandwidthMbps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `MemoryGibPerVcpu`<sup>Required</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference MemoryGibPerVcpu { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMib"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference MemoryMib { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference NetworkInterfaceCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference TotalLocalStorageGb { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCount"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference VcpuCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount AcceleratorCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount</a>

---

##### `AcceleratorManufacturersInput`<sup>Optional</sup> <a name="AcceleratorManufacturersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```csharp
public string[] AcceleratorManufacturersInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorNamesInput`<sup>Optional</sup> <a name="AcceleratorNamesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```csharp
public string[] AcceleratorNamesInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMibInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `BareMetalInput`<sup>Optional</sup> <a name="BareMetalInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```csharp
public string BareMetalInput { get; }
```

- *Type:* string

---

##### `BaselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbpsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `BurstablePerformanceInput`<sup>Optional</sup> <a name="BurstablePerformanceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```csharp
public string BurstablePerformanceInput { get; }
```

- *Type:* string

---

##### `CpuManufacturersInput`<sup>Optional</sup> <a name="CpuManufacturersInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```csharp
public string[] CpuManufacturersInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `InstanceGenerationsInput`<sup>Optional</sup> <a name="InstanceGenerationsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```csharp
public string[] InstanceGenerationsInput { get; }
```

- *Type:* string[]

---

##### `LocalStorageInput`<sup>Optional</sup> <a name="LocalStorageInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageInput"></a>

```csharp
public string LocalStorageInput { get; }
```

- *Type:* string

---

##### `LocalStorageTypesInput`<sup>Optional</sup> <a name="LocalStorageTypesInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```csharp
public string[] LocalStorageTypesInput { get; }
```

- *Type:* string[]

---

##### `MemoryGibPerVcpuInput`<sup>Optional</sup> <a name="MemoryGibPerVcpuInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpuInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `MemoryMibInput`<sup>Optional</sup> <a name="MemoryMibInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib MemoryMibInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib</a>

---

##### `NetworkInterfaceCountInput`<sup>Optional</sup> <a name="NetworkInterfaceCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount</a>

---

##### `OnDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `RequireHibernateSupportInput`<sup>Optional</sup> <a name="RequireHibernateSupportInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```csharp
public object RequireHibernateSupportInput { get; }
```

- *Type:* object

---

##### `SpotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `TotalLocalStorageGbInput`<sup>Optional</sup> <a name="TotalLocalStorageGbInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount VcpuCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; }
```

- *Type:* string[]

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; }
```

- *Type:* string[]

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.bareMetal"></a>

```csharp
public string BareMetal { get; }
```

- *Type:* string

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; }
```

- *Type:* string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; }
```

- *Type:* string[]

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorage"></a>

```csharp
public string LocalStorage { get; }
```

- *Type:* string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; }
```

- *Type:* string[]

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```csharp
public object RequireHibernateSupport { get; }
```

- *Type:* object

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesList <a name="SpotFleetRequestLaunchTemplateConfigOverridesList" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get"></a>

```csharp
private SpotFleetRequestLaunchTemplateConfigOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestLaunchTemplateConfigOverridesOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestLaunchTemplateConfigOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity">ResetWeightedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements"></a>

```csharp
private void PutInstanceRequirements(SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceRequirements"></a>

```csharp
private void ResetInstanceRequirements()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice"></a>

```csharp
private void ResetSpotPrice()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetWeightedCapacity` <a name="ResetWeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity"></a>

```csharp
private void ResetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput">SpotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput">WeightedCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice">SpotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity">WeightedCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirements"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceRequirementsInput"></a>

```csharp
public SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements InstanceRequirementsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements">SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput"></a>

```csharp
public string SpotPriceInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `WeightedCapacityInput`<sup>Optional</sup> <a name="WeightedCapacityInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput"></a>

```csharp
public double WeightedCapacityInput { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice"></a>

```csharp
public string SpotPrice { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `WeightedCapacity`<sup>Required</sup> <a name="WeightedCapacity" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity"></a>

```csharp
public double WeightedCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">ResetReplacementStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplacementStrategy` <a name="ResetReplacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```csharp
private void ResetReplacementStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">ReplacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">ReplacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplacementStrategyInput`<sup>Optional</sup> <a name="ReplacementStrategyInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```csharp
public string ReplacementStrategyInput { get; }
```

- *Type:* string

---

##### `ReplacementStrategy`<sup>Required</sup> <a name="ReplacementStrategy" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```csharp
public string ReplacementStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---


### SpotFleetRequestSpotMaintenanceStrategiesOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestSpotMaintenanceStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance">PutCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance">ResetCapacityRebalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityRebalance` <a name="PutCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```csharp
private void PutCapacityRebalance(SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `ResetCapacityRebalance` <a name="ResetCapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```csharp
private void ResetCapacityRebalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance">CapacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">CapacityRebalanceInput</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityRebalance`<sup>Required</sup> <a name="CapacityRebalance" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference CapacityRebalance { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `CapacityRebalanceInput`<sup>Optional</sup> <a name="CapacityRebalanceInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance CapacityRebalanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue"></a>

```csharp
public SpotFleetRequestSpotMaintenanceStrategies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---


### SpotFleetRequestTimeoutsOutputReference <a name="SpotFleetRequestTimeoutsOutputReference" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SpotFleetRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



